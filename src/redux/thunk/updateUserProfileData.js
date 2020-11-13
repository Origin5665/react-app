import { stopSubmit } from 'redux-form';
import { getProfileAPI } from './../../API/profileAPI'
import { getUserProfileCreator } from './../thunk/getUserProfileCreator';


export const updateUserProfileData = (body) => async (dispatch, getState) => {
   const userId = getState().auth.userId
   const response = await getProfileAPI.updateProfileData(body)
   if (response.resultCode === 0) {
      dispatch(getUserProfileCreator(userId))
   }
   else {
      // const displayErrorAC = stopSubmit('edit-profile', { _error: response.messages[0] })
      // dispatch(displayErrorAC)

      let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
      const displayErrorAC = stopSubmit('edit-profile', { "contacts": { [key]: response.messages[0] } })
      // console.log(key);
      // const displayErrorAC = stopSubmit('edit-profile', { contacts: { [key]: response.messages[0] } })
      dispatch(displayErrorAC)
      return Promise.reject(response.messages[0])
      // dispatch(stopSubmit('editProfile', {
      //    contacts: { [key]: response.messages[0] },
      // }))
   }

}
// let key = data.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
// dispatch(stopSubmit('editProfile', {
//    contacts: { [key]: data.messages[0] },
// }));