import { SET_USER_AUTH, GET_CAPTCHA_URL, REMOVE_CAPTCHA_URL } from '../../constant';
import { userProfileAPI } from '../../API/userProfileAPI';
import { AuthAPI } from '../../API/AuthAPI';
import { stopSubmit } from 'redux-form';


/* @type */
type initialStateType = typeof initialState;

type setUserAuthPayload = {
   login: string | null
   userId: number | null
   email: string | null
   isAuth: boolean
   captchaUrl?: string
};

type setUserAuthType = {
   type: typeof SET_USER_AUTH,
   payload: setUserAuthPayload
};
type getCaptchaUrlType = {
   type: typeof GET_CAPTCHA_URL
   payload: string
}

/* initial state */
const initialState = {
   login: null as string | null,
   userId: null as number | null,
   email: null as string | null,
   isAuth: false,
   captchaUrl: null as string | null
};

/* Action */
const setUserAuth = (login: string | null, userId: number | null, email: string | null, isAuth: boolean): setUserAuthType =>
   ({ type: SET_USER_AUTH, payload: { login, userId, email, isAuth, } });
const getCaptchaUrl = (captcha: string): getCaptchaUrlType => ({ type: GET_CAPTCHA_URL, payload: captcha })
const removeCaptcha = () => ({ type: REMOVE_CAPTCHA_URL })


/* THUNK */

/* получение данных авторизованного пользователя */

export const getAuthUser = () => async (dispatch: any) => {
   const response = await userProfileAPI.getUserAuth();
   if (response.resultCode === 0) {
      const { login, id, email } = response.data;
      dispatch(setUserAuth(login, id, email, true))
   }
};

/* добавление капчи в случае блокировки пользователя */

export const setCaptcha = () => async (dispatch: any) => {
   const res = await AuthAPI.getCaptcha()
   dispatch(getCaptchaUrl(res.data.url));
};

/* авторизация пользователя: если успешно - допускаем, 
   если блокировка - получаем капчу, в ином случае - выводим ошибку */

export const userAuthorization = (email: string, password: number, rememberMe: boolean, captchaUrl?: string) =>
   async (dispatch: any) => {
      const res = await AuthAPI.enterApp(email, password, rememberMe, captchaUrl)
      if (res.data.resultCode === 0) {
         dispatch(getAuthUser())
      } else if (res.data.resultCode === 10) {
         dispatch(setCaptcha())
         const displayError = stopSubmit('enterForm', { _error: res.data.messages[0] })
         dispatch(displayError)
      } else {
         const displayError = stopSubmit('enterForm', { _error: res.data.messages[0] })
         dispatch(displayError)
      }
   };

/* выход пользователя, обнуляем все исходные параметры, удаляем полученную капчу(?) */

export const userLogout = () => async (dispatch: any) => {

   const choice = window.confirm('Совершить выход?')
   if (choice) {
      const res = await AuthAPI.outApp();
      if (res.data.resultCode === 0) {
         dispatch(setUserAuth(null, null, null, false))
         dispatch(removeCaptcha());
      };
   };
};

/* reducer */

const authReducer = (state = initialState, action: any): initialStateType => {

   switch (action.type) {
      case SET_USER_AUTH:
         return {
            ...state,
            ...action.payload,
         };

      case GET_CAPTCHA_URL:
         return {
            ...state,
            captchaUrl: action.payload
         };

      case REMOVE_CAPTCHA_URL:
         return {

            ...state,
            captchaUrl: null
         };

      default:
         return state;
   };
};

export default authReducer;