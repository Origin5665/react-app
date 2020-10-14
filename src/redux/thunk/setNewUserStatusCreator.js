import { getProfileAPI } from '../../API/profileAPI';
import { getCurrentStatus } from '../actions/actionProfile';


export const setNewUserStatusCreator = (body) => (dispatch) => {

   getProfileAPI.sendNewUserStatus(body)
      .then(res => {

         if (res.data.resultCode === 0) {
            dispatch(getCurrentStatus(body))
         }


      })
      .catch(err => console.log('Ошибка: ' + err))

};