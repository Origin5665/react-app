import { createSelector } from 'reselect';
import { rootStateType } from '../reducers';

export const getUsers = (state: rootStateType) => {
   return state.users.users
}

export const getUsersSelector = createSelector(getUsers, (users) => {

   return users.filter(user => true)

})

export const getPageSize = (state: rootStateType) => {

   return state.users.pageSize
}

export const getTotalCount = (state: rootStateType) => {

   return state.users.totalCount
}

export const getCurrentPage = (state: rootStateType) => {

   return state.users.currentPage
}

export const getCurrentState = (state: rootStateType) => {

   return state.users.currentState
}

export const getFollowingProgress = (state: rootStateType) => {

   return state.users.followingProgress
}

