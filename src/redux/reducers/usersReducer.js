import { userProfileAPI } from '../../API/userProfileAPI';
import { followAPI } from '../../API/followAPI';
// Action types:

const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const PAGE_SIZE = 'PAGE_SIZE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const IS_LOADING = 'IS_LOADING';
const FOLLOWING_PROGRESS = 'FOLLOWING_PROGRESS';

// Action Creators:

export const subscribe = (id) => ({ type: SUBSCRIBE, userID: id })
export const unsubscribe = (id) => ({ type: UNSUBSCRIBE, userID: id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, count: totalCount })
export const setPageSize = (pageSize) => ({ type: PAGE_SIZE, size: pageSize })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setCurrentState = (state) => ({ type: IS_LOADING, currentState: state })
export const setFollowingState = (state, userId) => ({ type: FOLLOWING_PROGRESS, state, userId })
// Начальный стейт:

const initalState = {
   users: [],
   totalCount: 0,
   pageSize: 10,
   currentPage: 1,
   currentState: false,
   followingProgress: []
}

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

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setCurrentState(true))
      userProfileAPI.getUsers(currentPage, pageSize)
         .then(res => {
            dispatch(setUsers(res.items));
            dispatch(setCurrentState(false));
            dispatch(setTotalCount(res.totalCount));
         });
   }
};

export const followingCreator = (id) => (dispatch) => {
   dispatch(setFollowingState(true, id))
   followAPI.getFollow(id)
      .then(res => { if (res.resultCode === 0) dispatch(subscribe(id)) })
      .then(() => dispatch(setFollowingState(false, id)))
};

export const outFollowingCreator = (id) => (dispatch) => {
   dispatch(setFollowingState(true, id))
   followAPI.outFollow(id)
      .then(res => {
         if (res.resultCode === 0) {
            dispatch(unsubscribe(id))
         }
      })
      .then(() => dispatch(setFollowingState(false, id)))
};



export default usersReducer;