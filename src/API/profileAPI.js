import Axios from 'axios';
import { BASE_URL } from '../constant';

const instance = Axios.create({
   baseURL: BASE_URL
})

export const getProfileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`)
         .then(res => res.data)
   }
}

