import {

   UNSUBSCRIBE,
   SET_USERS,
   SET_TOTAL_COUNT,
   PAGE_SIZE,
   SUBSCRIBE,
   SET_CURRENT_PAGE,
   IS_LOADING,
   FOLLOWING_PROGRESS

} from '../../constant';

export const subscribe = (id) => ({ type: SUBSCRIBE, userID: id })
export const unsubscribe = (id) => ({ type: UNSUBSCRIBE, userID: id })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setTotalCount = (totalCount) => ({ type: SET_TOTAL_COUNT, count: totalCount })
export const setPageSize = (pageSize) => ({ type: PAGE_SIZE, size: pageSize })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })
export const setCurrentState = (state) => ({ type: IS_LOADING, currentState: state })
export const setFollowingState = (state, userId) => ({ type: FOLLOWING_PROGRESS, state, userId })