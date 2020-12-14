import axios from 'axios';
import { BASE_URL } from '../constant';
import { usersType } from '../redux/reducers/users'

type users = {
   items: Array<usersType>
   totalCount: number
   error: string | null
}

const instance = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
});

export const allUsers = {
   /* Получение всех пользователей */
   getAllUsers(currentPage: number = 1, pageSize: number = 10) {
      return instance.get<users>(`users?page=
         ${currentPage}&count=${pageSize}`)
         .then(res => res.data)
   }
};










