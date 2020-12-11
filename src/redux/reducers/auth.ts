import { SET_USER_AUTH, SET_CAPTCHA_URL, REMOVE_CAPTCHA_URL } from '../../constant';
import { auth, resultCode } from '../../api/auth';
import { stopSubmit } from 'redux-form';
import { ThunkAction } from 'redux-thunk';
import { rootStateType } from './index';




/* @type */
type initialStateType = typeof initialState;

type userDataPayload = {
   login: string | null
   userId: number | null
   email: string | null
   isAuth: boolean
   captcha?: string
};
/* Action type */
type setUserData = { type: typeof SET_USER_AUTH, payload: userDataPayload };
type setCaptcha = { type: typeof SET_CAPTCHA_URL, payload: string };
type removeCaptcha = { type: typeof REMOVE_CAPTCHA_URL };

type actionType = setUserData | setCaptcha | removeCaptcha
type thunkType = ThunkAction<Promise<void>, rootStateType, unknown, actionType>;


/* initial state */
const initialState = {
   login: null as string | null,
   userId: null as number | null,
   email: null as string | null,
   isAuth: false,
   captcha: null as string | null
};

/* Action */

/* Установить данные пользователя */
const setUserData = (
   login: string | null,
   userId: number | null,
   email: string | null,
   isAuth: boolean): setUserData =>
({
   type: SET_USER_AUTH,
   payload: { login, userId, email, isAuth, }
});

/* Установить капчу */
const setCaptcha = (captcha: string): setCaptcha => ({ type: SET_CAPTCHA_URL, payload: captcha })

/* Удалить капчу */
const removeCaptcha = (): removeCaptcha => ({ type: REMOVE_CAPTCHA_URL })


/* THUNK */

/* авторизация пользователя, получение данных  */

export const getAuthUser = (): thunkType => async (dispatch) => {
   const response = await auth.getAccessUser();
   if (response.resultCode === resultCode.successful) {
      const { login, id, email } = response.data;
      dispatch(setUserData(login, id, email, true))
   }
};

/* Полученить капчу, если пользователя заблокировал сервер */

export const getVerificationCaptcha = (): thunkType => async (dispatch) => {
   const res = await auth.getCaptcha()
   dispatch(setCaptcha(res.url));
};

/* аутентификация пользователя: если успешно - допускаем, 
   если блокировка - получаем капчу, в ином случае - выводим ошибку */

export const userLogin = (email: string, password: string, rememberMe: boolean, captchaUrl?: string): thunkType =>
   async (dispatch) => {
      const res = await auth.login(email, password, rememberMe, captchaUrl)
      if (res.resultCode === resultCode.successful) {
         dispatch(getAuthUser())
      } else if (res.resultCode === resultCode.captchaRequired) {
         dispatch(getVerificationCaptcha())
         const displayError = stopSubmit('enterForm', { _error: res.messages[0] })
         dispatch(displayError)
      } else {
         const displayError = stopSubmit('enterForm', { _error: res.messages[0] })
         dispatch(displayError)
      }
   };

/* выход пользователя, обнуляем все исходные параметры, удаляем полученную капчу(?) */

export const userLogout = (): thunkType => async (dispatch) => {

   const choice = window.confirm('Совершить выход?')
   if (choice) {
      const res = await auth.logout();
      if (res.resultCode === resultCode.successful) {
         dispatch(setUserData(null, null, null, false))
         dispatch(removeCaptcha());
      };
   };
};

/* reducer */

const authReducer = (state = initialState, action: actionType): initialStateType => {

   switch (action.type) {
      case SET_USER_AUTH:
         return {
            ...state,
            ...action.payload,
         };

      case SET_CAPTCHA_URL:
         return {
            ...state,
            captcha: action.payload
         };

      case REMOVE_CAPTCHA_URL:
         return {

            ...state,
            captcha: null
         };

      default:
         return state;
   };
};

export default authReducer;