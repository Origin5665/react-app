import { userProfileAPI } from '../../API/userProfileAPI';
import { setUsers, setTotalCount, setCurrentState, } from '../actions/actionUsers';

export const getUsersThunkCreator = (currentPage, pageSize) => {
   return (dispatch) => {
      dispatch(setCurrentState(true))
      userProfileAPI.getUsers(currentPage, pageSize)
         .then(res => {
            dispatch(setUsers(res.items));
            dispatch(setCurrentState(false));
            dispatch(setTotalCount(res.totalCount));
         });
   }
};