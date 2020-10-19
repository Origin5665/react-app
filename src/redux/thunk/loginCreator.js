import { AuthAPI } from '../../API/AuthAPI';
import { getAuthUserProfileCreator } from './getAuthUserProfileCreator';
import { stopSubmit } from 'redux-form';

export const loginCreator = (email, password, rememberMe) => (dispatch) => {


   AuthAPI.enterApp(email, password, rememberMe)
      .then(res => {
         if (res.data.resultCode === 0) {
            console.log('все ок!')
            dispatch(getAuthUserProfileCreator())
         } else {
            const displayErrorAC = stopSubmit('enterForm', { _error: res.data.messages[0] })
            dispatch(displayErrorAC)
         }
      })
}