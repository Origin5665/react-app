import { SET_USER_AUTH } from '../../constant';
import { GET_CAPTCHA_URL, REMOVE_CAPTCHA_URL } from '../../constant';

const initialState = {
   login: null,
   userId: null,
   email: null,
   isAuth: false,
   captchaUrl: null

}

const authReducer = (state = initialState, action) => {

   switch (action.type) {
      case SET_USER_AUTH:
         return {
            ...state,
            ...action.payload,
         };

      case GET_CAPTCHA_URL:
         return {
            ...state,
            captchaUrl: action.payload
         };
      case REMOVE_CAPTCHA_URL:
         return {
            ...state,
            captchaUrl: null
         }

      default:
         return state;
   };

};



export default authReducer;