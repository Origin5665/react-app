import { AuthAPI } from '../../API/AuthAPI';
import { setUserAuth } from '../actions/actionAuth';


export const logoutCreator = () => async (dispatch) => {
   const choice = window.confirm('Совершить выход?')
   if (choice) {
      const response = await AuthAPI.outApp()
      if (response.data.resultCode === 0) {
         dispatch(setUserAuth(null, null, null, false))
      }
   }

};