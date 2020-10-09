import { ADD_POST, ADD_INPUT_TEXT, SET_USER } from '../../constant';

export const actionCreatorPost = () => ({ type: ADD_POST })
export const actionCreatorMessage = (text) => ({ type: ADD_INPUT_TEXT, value: text })
export const setUserProfile = (profile) => ({ type: SET_USER, profile: profile })