import { getProfileAPI } from "../../API/profileAPI"
import { newPhotoSucces } from '../actions/actionProfile'

export const uploadImageProfile = (file) => async (dispatch) => {

   const response = await getProfileAPI.updateProfilePhoto(file);
   console.log(response);
   dispatch(newPhotoSucces(response))

}