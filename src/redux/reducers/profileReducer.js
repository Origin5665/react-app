import { ADD_POST, ADD_INPUT_TEXT, SET_USER } from '../../constant';

const initialState = {

   post: [
      { id: 1, message: 'Вышел новый альбом Хаски!', count: '10' },
      { id: 2, message: 'Пытаюсь разобраться в React и Redux', count: '96' },
      { id: 3, message: '18 декабря Хаски выступит в Санкт-Петербурге', count: '-1' }

   ],
   postTextInput: '',
   profileUser: null

};

const profileReducer = (state = initialState, action) => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            postTextInput: '',
            post: [{ id: 5, message: state.postTextInput, count: 2 }, ...state.post]
         };

      case ADD_INPUT_TEXT:
         return {
            ...state,
            postTextInput: action.value
         };

      case SET_USER: {
         return {
            ...state,
            profileUser: action.profile
         };
      }
      default:
         return state
   };
};

export default profileReducer;