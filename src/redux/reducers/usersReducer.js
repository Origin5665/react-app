const SUBSCRIBE = 'SUBSCRIBE';
const UNSUBSCRIBE = 'UNSUBSCRIBE';
const SET_USERS = 'SET_USERS';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const PAGE_SIZE = 'PAGE_SIZE';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';



// Action Creators:

export const subAC = (id) => ({ type: SUBSCRIBE, userID: id })
export const unsubAC = (id) => ({ type: UNSUBSCRIBE, userID: id })
export const setUsersAC = (users) => ({ type: SET_USERS, users })
export const setTotalAC = (totalCount) => ({ type: SET_TOTAL_COUNT, count: totalCount })
export const pageSizeAC = (pageSize) => ({ type: PAGE_SIZE, size: pageSize })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage })

const initalState = {
   users: [],
   totalCount: 0,
   pageSize: 10,
   currentPage: 1


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
         }

      case UNSUBSCRIBE:
         return {
            ...state,
            users: state.users.map(user => {

               if (user.id === action.userID) {
                  return { ...user, followed: false }

               }
               return user;
            })
         }

      case SET_USERS:
         return {
            ...state,
            users: [...action.users]
         }
      case SET_TOTAL_COUNT:
         return {
            ...state,
            totalCount: action.count
         }
      // case PAGE_SIZE: {
      //    return {
      //       ...state,
      //       pageSize: action.size
      //    }
      // }
      case SET_CURRENT_PAGE:
         return {
            ...state,
            currentPage: action.currentPage
         }

      default:
         return state
   }
};

export default usersReducer;