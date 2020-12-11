
import axios from 'axios';
import { BASE_URL } from '../constant';

const instance = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
})

export const profile = {
   getUserProfile(userID: number) {
      return instance.get(`profile/${userID}`)
         .then(res => res.data)
   },

   getСurrentUserStatus(userID: number) {
      return instance.get(`profile/status/${userID}`)
         .then(res => res.data)
   },

   sendNewUserStatus(string: string) {
      return instance.put('profile/status', { status: string })
         .then(res => res)
   },
   updateUserPhoto(file: any) {
      const formData = new FormData();
      formData.append('image', file)
      return instance.put('/profile/photo', formData)
         .then(res => res.data.data.photos)
   },

   updateUserProfile(body: any) {

      return instance.put('/profile', body)
         .then(res => res.data)
   }
};

