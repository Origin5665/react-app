import { SET_USER_AUTH } from '../../constant';

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



export default authReducer;