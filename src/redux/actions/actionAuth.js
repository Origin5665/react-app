import { GET_CAPTCHA_URL, REMOVE_CAPTCHA_URL, SET_USER_AUTH } from '../../constant';


export const setUserAuth = (login, userId, email, isAuth, captchaUrl) =>
   ({
      type: SET_USER_AUTH,
      payload: { login, userId, email, isAuth, captchaUrl }
   });

export const getCaptchaUrl = body => ({ type: GET_CAPTCHA_URL, payload: body })
export const removeCaptcha = () => ({ type: REMOVE_CAPTCHA_URL })