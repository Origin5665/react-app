import { ADD_MESSAGE, ADD_MESSAGE_TEXT } from '../../constant';

export const actionCreatorPost = () => ({ type: ADD_MESSAGE })
export const actionCreatorMessage = (text) => ({ type: ADD_MESSAGE_TEXT, value: text })