import { userProfileAPI } from '../../API/userProfileAPI';

// Переменные:

const SET_USER_AUTH = 'SET_USER_AUTH';

// Action types:

export const setUserAuth = (login, userId, email) =>
   ({
      type: SET_USER_AUTH,
      data: { login, userId, email }
   });

const initialState = {
   login: null,
   userId: null,
   email: null,
   isAuth: false
}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_AUTH:
         return {
            ...state,
            ...action.data,
            isAuth: true
         }
      default:
         return state;
   }
}


export const getUserProfileCreator = () => (dispatch) => {
   userProfileAPI.getUserAuth()
      .then(res => {
         if (res.resultCode === 0) {
            const { login, id, email } = res.data;
            dispatch(setUserAuth(login, id, email))
         }
      });
};
export default authReducer;