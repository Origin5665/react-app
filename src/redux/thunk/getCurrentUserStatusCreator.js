import { getProfileAPI } from '../../API/profileAPI';
import { getCurrentStatus } from '../actions/actionProfile';


export const getCurrentUserStatusCreator = (id) => (dispatch) => {

   getProfileAPI.getСurrentUserStatus(id)
      .then(res => {

         dispatch(getCurrentStatus(res))
      })
      .catch(err => console.log('Ошибка: ' + err))

};