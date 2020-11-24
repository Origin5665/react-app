
import Axios from 'axios';
import { BASE_URL } from '../constant';

const instance = Axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
})

export const getProfileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`)
         .then(res => res.data)
   },

   getСurrentUserStatus(userId) {
      return instance.get(`profile/status/${userId}`)
         .then(res => res.data)
   },

   sendNewUserStatus(string) {
      return instance.put('profile/status', { status: string })
         .then(res => res)
   },
   updateProfilePhoto(file) {
      const formData = new FormData();
      formData.append('image', file)
      return instance.put('/profile/photo', formData)
         .then(res => res.data.data.photos)
   },

   updateProfileData(body) {

      return instance.put('/profile', body)
         .then(res => res.data)
   }
};

