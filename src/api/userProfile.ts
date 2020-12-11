import axios from 'axios';
import { BASE_URL } from '../constant';

const instance = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
});

export const user = {
   /* Получение всех пользователей */
   getAllUsers(currentPage = 1, pageSize = 10) {
      return instance.get(`users?page=
         ${currentPage}&count=${pageSize}`)
         .then(res => res.data)
   }
};










