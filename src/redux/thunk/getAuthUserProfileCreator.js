import { userProfileAPI } from '../../API/userProfileAPI';
import { setUserAuth } from '../actions/actionAuth';

export const getAuthUserProfileCreator = () => (dispatch) => {
   return userProfileAPI.getUserAuth()
      .then(res => {
         if (res.resultCode === 0) {
            const { login, id, email } = res.data;
            dispatch(setUserAuth(login, id, email, true))
         }
      });

};