import { SET_USER_AUTH } from '../../constant';

export const setUserAuth = (login, userId, email, isAuth) =>
   ({
      type: SET_USER_AUTH,
      payload: { login, userId, email, isAuth }
   });