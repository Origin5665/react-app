import { ADD_MESSAGE } from '../../constant';

export const actionCreatorPost = (body) => ({ type: ADD_MESSAGE, message: body })
