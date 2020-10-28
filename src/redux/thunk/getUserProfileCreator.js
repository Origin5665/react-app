// Import:
import { getProfileAPI } from '../../API/profileAPI';
import { setUserProfile } from '../actions/actionProfile';

export const getUserProfileCreator = (userId) => async (dispatch) => {
   const response = await getProfileAPI.getUserProfile(userId)
   dispatch(setUserProfile(response))
}