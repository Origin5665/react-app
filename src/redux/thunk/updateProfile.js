import { stopSubmit } from 'redux-form';
import { getProfileAPI } from './../../API/profileAPI'
import { getProfile } from './getProfile';


export const updateProfile = (body) => async (dispatch, getState) => {
   console.log('thunk update');
   const userId = getState().auth.userId
   const response = await getProfileAPI.updateProfileData(body)
   if (response.resultCode === 0) {
      dispatch(getProfile(userId))
   }
   else if (response.resultCode === 1) {
      let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
      const displayErrorAC = stopSubmit('edit-profile', { "contacts": { [key]: response.messages[0] } })
      dispatch(displayErrorAC)
      return Promise.reject(response.messages[0])

   }

}
