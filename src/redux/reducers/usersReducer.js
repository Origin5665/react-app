import {

   UNSUBSCRIBE,
   SET_USERS,
   SET_TOTAL_COUNT,
   SUBSCRIBE,
   SET_CURRENT_PAGE,
   IS_LOADING,
   FOLLOWING_PROGRESS

} from '../../constant';

const initalState = {
   users: [],
   totalCount: 0,
   pageSize: 10,
   currentPage: 1,
   currentState: false,
   followingProgress: []
};

const usersReducer = (state = initalState, action) => {

   switch (action.type) {

      case SUBSCRIBE:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userID) {
                  return { ...user, followed: true }
               }
               return user;
            })
         };

      case UNSUBSCRIBE:
         return {
            ...state,
            users: state.users.map(user => {
               if (user.id === action.userID) {
                  return { ...user, followed: false }
               }
               return user;
            })
         };

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         };

      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.count
         };

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         };

      case IS_LOADING:
         return {
            ...state,
            currentState: action.currentState
         };

      case FOLLOWING_PROGRESS:
         return {
            ...state,
            followingProgress: action.state
               ? [...state.followingProgress, action.userId]
               : state.followingProgress.filter((id => id != action.userId))
         }
      default:
         return state
   }
};

export default usersReducer;