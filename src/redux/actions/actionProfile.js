import { ADD_POST, ADD_INPUT_TEXT, SET_USER, GET_CURRENT_STATUS } from '../../constant';

// profile message =>
export const actionCreatorPost = (text) => ({ type: ADD_POST, value: text })
// export const actionCreatorMessage = (text) => ({ type: ADD_INPUT_TEXT, value: text })

// profile user =>
export const setUserProfile = (profile) => ({ type: SET_USER, profile: profile })

// profile status =>
export const getCurrentStatus = (statusText) => ({ type: GET_CURRENT_STATUS, status: statusText })
// export const setNewStatus = (string) => ({ type: SET_USER, status: string })