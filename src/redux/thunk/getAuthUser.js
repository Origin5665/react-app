import { userProfileAPI } from '../../API/userProfileAPI';
import { setUserAuth } from '../actions/actionAuth';

export const getAuthUser = () => async (dispatch) => {
   const response = await userProfileAPI.getUserAuth()
   if (response.resultCode === 0) {
      const { login, id, email } = response.data;
      dispatch(setUserAuth(login, id, email, true))
   }
};