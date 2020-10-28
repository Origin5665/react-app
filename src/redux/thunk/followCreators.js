import { followAPI } from '../../API/followAPI';
import { subscribe, unsubscribe, setFollowingState } from '../actions/actionUsers';

export const followingCreator = (id) => async (dispatch) => {
   dispatch(setFollowingState(true, id))
   const response = await followAPI.getFollow(id)
   if (response.resultCode === 0) dispatch(subscribe(id))
   dispatch(setFollowingState(false, id))
};

export const outFollowingCreator = (id) => async (dispatch) => {
   dispatch(setFollowingState(true, id))
   const response = await followAPI.outFollow(id)
   if (response.resultCode === 0) dispatch(unsubscribe(id))
   dispatch(setFollowingState(false, id))
};

// вынести дубли в отдельную функцию