import { followAPI } from '../../API/followAPI';
import { subscribe, unsubscribe, setFollowingState } from '../actions/actionUsers';

export const followingCreator = (id) => (dispatch) => {
   dispatch(setFollowingState(true, id))
   followAPI.getFollow(id)
      .then(res => { if (res.resultCode === 0) dispatch(subscribe(id)) })
      .then(() => dispatch(setFollowingState(false, id)))
};

export const outFollowingCreator = (id) => (dispatch) => {
   dispatch(setFollowingState(true, id))
   followAPI.outFollow(id)
      .then(res => {
         if (res.resultCode === 0) {
            dispatch(unsubscribe(id))
         }
      })
      .then(() => dispatch(setFollowingState(false, id)))
};