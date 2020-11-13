import { ADD_POST, SET_NEW_PHOTO, SET_USER, GET_CURRENT_STATUS, UPDATE_PROFILE_DATA } from '../../constant';

// profile message =>
export const actionCreatorPost = (text) => ({ type: ADD_POST, value: text })

// profile user =>
export const setUserProfile = (profile) => ({ type: SET_USER, profile: profile })

// profile status =>
export const getCurrentStatus = (statusText) => ({ type: GET_CURRENT_STATUS, status: statusText })

// profile update photo user
export const newPhotoSucces = (image) => ({ type: SET_NEW_PHOTO, image })

