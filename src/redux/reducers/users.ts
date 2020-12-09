import { updateObject } from '../../utils/objects-helper';
import { photoType } from '../reducers/profile';
import { followAPI } from '../../API/followAPI';
import { userProfileAPI } from '../../API/userProfileAPI';
import {

   UNSUBSCRIBE,
   SET_USERS,
   SET_TOTAL_COUNT,
   SUBSCRIBE,
   SET_CURRENT_PAGE,
   FOLLOWING_PROGRESS

} from '../../constant';

/* @types */

type initialStateType = typeof initalState;

type usersType = {
   id: number
   name: string
   status: string
   photos: photoType
   followed: boolean
}
/* @action types */
type subscribeType = { type: typeof SUBSCRIBE, userID: number }
type unsubscribeType = { type: typeof UNSUBSCRIBE, userID: number }
type setUsersType = { type: typeof SET_USERS, users: Array<usersType> }
type setTotalCountType = { type: typeof SET_TOTAL_COUNT, totalCount: number }
type setCurrentPageType = { type: typeof SET_CURRENT_PAGE, currentPage: number }
type setFollowingStateType = { type: typeof FOLLOWING_PROGRESS, state: boolean, userID: number }


/* inital state */
const initalState = {
   users: [] as Array<usersType>,
   totalCount: 0,
   pageSize: 50,
   currentPage: 1 as number,
   currentState: false as boolean,
   followingProgress: [] as Array<number>
};

/* Actions */
export const subscribe = (userID: number): subscribeType => ({ type: SUBSCRIBE, userID });
export const unsubscribe = (userID: number): unsubscribeType => ({ type: UNSUBSCRIBE, userID });
export const setUsers = (users: Array<usersType>): setUsersType => ({ type: SET_USERS, users });
export const setTotalCount = (totalCount: number): setTotalCountType => ({ type: SET_TOTAL_COUNT, totalCount })
export const setCurrentPage = (currentPage: number): setCurrentPageType => ({ type: SET_CURRENT_PAGE, currentPage })
export const setFollowingState = (state: boolean, userID: number): setFollowingStateType => ({ type: FOLLOWING_PROGRESS, state, userID })


/* THUNK */

/* Подписка на пользователя */
export const subscribeUser = (id: number) => async (dispatch: any) => {
   followToggle(dispatch, id, followAPI.getFollow.bind(id), subscribe)
};

/* Отписка от пользователя */
export const unsubscribeUser = (id: number) => async (dispatch: any) => {
   followToggle(dispatch, id, followAPI.outFollow.bind(id), unsubscribe)
};

/* Распределитель */
const followToggle = async (dispatch: any, userID: number, apiMethod: any, actionCreator: any) => {
   dispatch(setFollowingState(true, userID));
   const res = await apiMethod(userID);
   if (res.resultCode === 0) {
      dispatch(actionCreator(userID));
   }
   dispatch(setFollowingState(false, userID));
}

/* Получение пользователей текущей страницы */
export const getUserProfilesCurrentPage = (currentPage: number, pageSize: number) => {
   return async (dispatch: any) => {
      const res = await userProfileAPI.getUsers(currentPage, pageSize);
      dispatch(setUsers(res.items));
      dispatch(setTotalCount(res.totalCount));
   };
};

/* Reducer */
const users = (state = initalState, action: any): initialStateType => {

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
            totalCount: action.totalCount
         };

      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         };

      case FOLLOWING_PROGRESS:
         return {
            ...state,
            followingProgress: action.state
               ? [...state.followingProgress, action.userID]
               : state.followingProgress.filter((id => id !== action.userId))
         };

      default:
         return state
   };
};
export default users;
