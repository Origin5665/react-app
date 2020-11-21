import { userProfileAPI } from '../../API/userProfileAPI';
import { setUsers, setTotalCount } from '../actions/actionUsers';

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return async (dispatch) => {
      const response = await userProfileAPI.getUsers(currentPage, pageSize)
      dispatch(setUsers(response.items));
      dispatch(setTotalCount(response.totalCount));

   }
};