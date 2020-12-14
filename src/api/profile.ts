
import axios from 'axios';
import { BASE_URL } from '../constant';
import { profileType } from '../redux/reducers/profile';
import { resultCode } from './auth';
import { photoType } from '../redux/reducers/profile'
/* types */

type sendNewUserStatus = {
   data: {}
   resultCode: resultCode
   messages: Array<string>
}

type updateUserProfile = {
   data: {}
   resultCode: resultCode
   messages: Array<string>
}
type updateUserPhoto = {
   data: photoType
   resultCode: resultCode
   messages: Array<string>
}





const instance = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
});


export const profile = {
   /* Получение профиля по id */
   getUserProfile(userID: number) {
      return instance.get<profileType>(`profile/${userID}`)
         .then(res => res.data)
   },
   /* Получение текущего статуся пользователя */
   getСurrentUserStatus(userID: number) {
      return instance.get<string>(`profile/status/${userID}`)
         .then(res => res.data)
   },
   /* Отправить новый статус */
   sendNewUserStatus(string: string) {
      return instance.put<sendNewUserStatus>('profile/status', { status: string })
         .then(res => res)
   },
   /* Отправить новую фотографию*/
   updateUserPhoto(file: any) {
      const formData = new FormData();
      formData.append('image', file)
      return instance.put<updateUserPhoto>('/profile/photo', formData)
         .then(res => res.data.data)
   },
   /* Обновить данные пользователя */
   updateUserProfile(body: any) {
      return instance.put<updateUserProfile>('/profile', body)
         .then(res => res.data)
   }
};

