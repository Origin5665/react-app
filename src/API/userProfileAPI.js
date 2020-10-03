import Axios from 'axios';
import { BASE_URL } from '../constant';

const instance = Axios.create({
   withCredentials: true,
   baseURL: BASE_URL
})

export const userProfileAPI = {
   getUserAuth() {
      return instance.get('auth/me')
         .then(res => res.data)
   },
   getUsers(currentPage = 2, pageSize = 10) {
      return instance.get(`users?page=
         ${currentPage}&count=${pageSize}`)
         .then(res => res.data)
   }


}










