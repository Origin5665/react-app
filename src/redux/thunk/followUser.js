import { followAPI } from '../../API/followAPI';
import { subscribe, unsubscribe, setFollowingState } from '../actions/actionUsers';

export const subscribeUser = (id) => async (dispatch) => {
   followToggle(dispatch, id, followAPI.getFollow.bind(id), subscribe)
};

export const unsubscribeUser = (id) => async (dispatch) => {
   followToggle(dispatch, id, followAPI.outFollow.bind(id), unsubscribe)
};

const followToggle = async (dispatch, userId, apiMethod, actionCreator) => {

   dispatch(setFollowingState(true, userId));
   const data = await apiMethod(userId);
   if (data.resultCode === 0) {
      dispatch(actionCreator(userId));
   }
   dispatch(setFollowingState(false, userId));
}


