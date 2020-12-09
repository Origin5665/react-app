
import { getAuthUser } from './auth';

/* @type */
type setInitializedType = { type: typeof SET_INIT };
type setInitialType = { initialized: boolean };

/* types */
const SET_INIT = 'SET_INIT';

/* initial state */
const initialState: setInitialType = {
   initialized: false
};

/* Action */
const setInitial = (): setInitializedType => ({ type: SET_INIT });

/* thunk */
export const initialApp = () => (dispatch: any) => {
   const promise = dispatch(getAuthUser())
   promise.then(() => {
      dispatch(setInitial())
   })
};

const init = (state = initialState, action: any): setInitialType => {
   switch (action.type) {
      case SET_INIT:
         return {
            ...state,
            initialized: true
         };

      default:
         return state;
   };
};

export default init;