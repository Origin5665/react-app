import { getProfileAPI } from '../../API/profileAPI';
import { getCurrentStatus } from '../actions/actionProfile';


export const getCurrentUserStatus = (id) => async (dispatch) => {
   try {
      const response = await getProfileAPI.getСurrentUserStatus(id)
      dispatch(getCurrentStatus(response))
   } catch (error) {
      console.log('Ошибка: ' + error)
   }
};