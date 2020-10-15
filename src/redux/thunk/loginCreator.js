import { AuthAPI } from '../../API/AuthAPI';
import { getAuthUserProfileCreator } from './getAuthUserProfileCreator';


export const loginCreator = (email, password, rememberMe) => (dispatch) => {
   AuthAPI.enterApp(email, password, rememberMe)
      .then(res => {
         if (res.data.resultCode === 0) {
            console.log('все ок!')
            dispatch(getAuthUserProfileCreator())
         }
      })
}