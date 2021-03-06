import axios from "axios";
import { BASE_URL } from "../constant";
import { resultCode } from './auth';

/* types */

type follow = {
   resultCode: resultCode
   messagers: Array<string>
   data: {}
}

const instance = axios.create({
   withCredentials: true,
   headers: {
      "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5"
   },
   baseURL: BASE_URL
});

export const follow = {
   /* Запрос на удаление подписки на пользователя */
   userSub(userID: number) {
      return instance.delete<follow>(`follow/${userID}`)
         .then(res => res.data)
   },
   /* Запрос на добавление подписки на пользователя */
   userUnsub(userID: number) {
      return instance.post<follow>(`follow/${userID}`)
         .then(res => res.data)
   }
};