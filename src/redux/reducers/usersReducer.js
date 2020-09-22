const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';




// Action Creators:

export const subAC = (ID) => ({ type: SUBSCRIBE, userID: ID })
export const unsubAC = (ID) => ({ type: UNSUBSCRIBE, userID: ID })
export const setUsersAC = (users) => ({ type: SET_USERS, users })


const initalState = {
   users: []
}


const usersReducer = (state = initalState, action) => {

   switch (action.type) {
      case SUBSCRIBE:

         return {
            ...state,
            users: state.users.map(user => {

               if (user.ID === action.userID) {
                  return { ...user, add: true }
               }
               return user;
            })
         }

      case UNSUBSCRIBE:
         return {
            ...state,
            users: state.users.map(user => {

               if (user.ID === action.userID) {
                  return { ...user, add: false }

               }
               return user;
            })
         }

      case SET_USERS:

         return {
            ...state,
            users: [...state.users, ...action.users]
         }

      default:
         return state
   }
};

export default usersReducer;