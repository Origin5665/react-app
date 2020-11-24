
import { getAuthUser } from '../thunk/getAuthUser'



const SET_INIT = 'SET_INIT';

const setInitializedAC = () => ({ type: SET_INIT })

const initialState = {
   initialized: false
}

const appReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_INIT:

         return {
            ...state,
            initialized: true
         }

      default:
         return state;
   }
};

export const appInitCreator = () => (dispatch) => {

   const promise = dispatch(getAuthUser())
   promise.then(() => {
      dispatch(setInitializedAC())
   })
}






export default appReducer