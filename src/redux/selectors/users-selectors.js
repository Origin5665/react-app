import { createSelector } from 'reselect';

export const getUsers = (state) => {
   return state.users.users
}

export const getUsersSuperSelector = createSelector(getUsers, (users) => {

   return users.filter(user => true)

})

export const getPageSize = (state) => {

   return state.users.pageSize
}

export const getTotalCount = (state) => {

   return state.users.totalCount
}

export const getCurrentPage = (state) => {

   return state.users.currentPage
}

export const getCurrentState = (state) => {

   return state.users.currentState
}

export const getFollowingProgress = (state) => {

   return state.users.followingProgress
}

