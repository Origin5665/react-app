
import { ADD_POST, SET_NEW_PHOTO, SET_USER, GET_CURRENT_STATUS } from '../../constant';


const initialState = {

   post: [
      { id: 1, message: 'Вышел новый альбом Хаски!', count: '10', date: '07.10.20' },
   ],
   profileUser: null,
   status: '',

};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            post: [{ id: 5, message: action.value, date: new Date().toLocaleDateString() }, ...state.post]
         };

      case SET_USER:
         return {
            ...state,
            profileUser: action.profile
         };

      case GET_CURRENT_STATUS:
         return {
            ...state,
            status: action.status
         };

      case SET_NEW_PHOTO:
         return {
            ...state, profileUser: { ...state.profileUser, photos: action.image }
         };

      default:
         return state
   };
};

export default profileReducer;