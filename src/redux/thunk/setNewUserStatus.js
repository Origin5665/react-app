import { getProfileAPI } from '../../API/profileAPI';
import { getCurrentStatus } from '../actions/actionProfile';

export const setNewUserStatus = (body) => async (dispatch) => {
   try {
      const response = await getProfileAPI.sendNewUserStatus(body);
      if (response.data.resultCode === 0) dispatch(getCurrentStatus(body));
   } catch (error) {
      console.log('Ошибка: ' + error);
   }
};