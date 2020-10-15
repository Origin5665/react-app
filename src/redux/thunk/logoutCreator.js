import { AuthAPI } from '../../API/AuthAPI';
import { setUserAuth } from '../actions/actionAuth';


export const logoutCreator = () => (dispatch) => {
   console.log('log out')
   AuthAPI.outApp()
      .then(res => {
         if (res.data.resultCode === 0) {
            dispatch(setUserAuth(null, null, null, false))
         }
      })
}