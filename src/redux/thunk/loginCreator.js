import { AuthAPI } from '../../API/AuthAPI';
import { getAuthUserProfileCreator } from './getAuthUserProfileCreator';
import { stopSubmit } from 'redux-form';

export const loginCreator = (email, password, rememberMe) => async (dispatch) => {
   const response = await AuthAPI.enterApp(email, password, rememberMe)
   if (response.data.resultCode === 0) {
      dispatch(getAuthUserProfileCreator())
   } else {
      const displayErrorAC = stopSubmit('enterForm', { _error: response.data.messages[0] })
      dispatch(displayErrorAC)
   }
};