import {

   UNSUBSCRIBE,
   SET_USERS,
   SET_TOTAL_COUNT,
   SUBSCRIBE,
   SET_CURRENT_PAGE,
   IS_LOADING,
   FOLLOWING_PROGRESS

} from '../../constant';
import { updateObject } from '../../utils/objects-helper';

const initalState = {
   users: [],
   totalCount: 0,
   pageSize: 50,
   currentPage: 1,
   portionSize: 5,
   currentState: false,
   followingProgress: []
};

const usersReducer = (state = initalState, action) => {

   switch (action.type) {

      case SUBSCRIBE:
         return {
            ...state,
            users: updateObject(state.users, action.userID, "id", { followed: true })

         };

      case UNSUBSCRIBE:
         return {
            ...state,
            users: updateObject(state.users, action.userID, "id", { followed: false })

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
               : state.followingProgress.filter((id => id !== action.userId))
         }
      default:
         return state
   }
};

export default usersReducer;
