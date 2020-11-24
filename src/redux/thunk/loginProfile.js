import { AuthAPI } from '../../API/AuthAPI';
import { stopSubmit } from 'redux-form';
import { getAuthUser } from './getAuthUser';
import { getCaptchaUserVerification } from './getCaptchaUserVerification'

export const loginProfile = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
   const response = await AuthAPI.enterApp(email, password, rememberMe, captchaUrl)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUser())
   } else if (response.data.resultCode === 10) {
      dispatch(getCaptchaUserVerification())
      const displayErrorAC = stopSubmit('enterForm', { _error: response.data.messages[0] })
      dispatch(displayErrorAC)
   } else {
      const displayErrorAC = stopSubmit('enterForm', { _error: response.data.messages[0] })
      dispatch(displayErrorAC)
   }
};