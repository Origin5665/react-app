
import { ADD_POST, ADD_INPUT_TEXT, SET_USER, GET_CURRENT_STATUS } from '../../constant';

const initialState = {

   post: [
      { id: 1, message: 'Вышел новый альбом Хаски!', count: '10' },
   ],
   profileUser: null,
   status: ''

};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            post: [{ id: 5, message: action.value, count: 2 }, ...state.post]
         };



      case SET_USER: {
         return {
            ...state,
            profileUser: action.profile
         };
      }

      case GET_CURRENT_STATUS: {
         return {
            ...state,
            status: action.status
         }
      }


      default:
         return state
   };
};

export default profileReducer;