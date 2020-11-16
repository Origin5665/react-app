import { AuthAPI } from '../../API/AuthAPI';
import { getAuthUserProfileCreator } from './getAuthUserProfileCreator';
import { stopSubmit } from 'redux-form';
import { getCaptchaUserVerification } from './getCaptchaUserVerification'

export const loginCreator = (email, password, rememberMe, captchaUrl) => async (dispatch) => {
   const response = await AuthAPI.enterApp(email, password, rememberMe, captchaUrl)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserProfileCreator())

   } else if (response.data.resultCode === 10) {

      dispatch(getCaptchaUserVerification())
      const displayErrorAC = stopSubmit('enterForm', { _error: response.data.messages[0] })
      dispatch(displayErrorAC)
   } else {
      const displayErrorAC = stopSubmit('enterForm', { _error: response.data.messages[0] })
      dispatch(displayErrorAC)
   }
};