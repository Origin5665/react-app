import { userProfileAPI } from '../../API/userProfileAPI';
import { setUsers, setTotalCount, setCurrentState, } from '../actions/actionUsers';

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return async (dispatch) => {
      dispatch(setCurrentState(true))
      const response = await userProfileAPI.getUsers(currentPage, pageSize)
      dispatch(setUsers(response.items));
      dispatch(setCurrentState(false));
      dispatch(setTotalCount(response.totalCount));

   }
};