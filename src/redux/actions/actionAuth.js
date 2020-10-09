import { SET_USER_AUTH } from '../../constant';

export const setUserAuth = (login, userId, email) =>
   ({
      type: SET_USER_AUTH,
      data: { login, userId, email }
   });