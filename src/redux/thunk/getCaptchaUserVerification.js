import { AuthAPI } from './../../API/AuthAPI'
import { getCaptchaUrl } from '../actions/actionAuth'

export const getCaptchaUserVerification = () => async dispatch => {

   const response = await AuthAPI.getCaptchaVerification()
   console.log(response)
   dispatch(getCaptchaUrl(response.data.url))
}