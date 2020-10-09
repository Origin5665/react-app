// Import:
import { getProfileAPI } from '../../API/profileAPI';
import { setUserProfile } from '../actions/actionProfile';

//Thunk:
export const getUserProfileCreator = (userId) => (dispatch) => {
   getProfileAPI.getUserProfile(userId)
      .then(res => {
         dispatch(setUserProfile(res))
      })
}