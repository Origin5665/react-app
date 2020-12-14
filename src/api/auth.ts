import axios from 'axios';
import { BASE_URL } from '../constant';

const instance = axios.create({
   withCredentials: true,
   baseURL: BASE_URL,
   headers: { "API-KEY": "c7396936-96da-47b7-b8e8-a78259e1e0e5" }
});

/* types */

type getAccessUser = {
   data: { id: number, email: string, login: string }
   resultCode: resultCode
   messages: Array<string>
}

type login = {
   data: { userId: number }
   resultCode: resultCode
   messages: Array<string>
}
type logout = {
   data: {}
   resultCode: resultCode
   messages: Array<string>
}
type getCaptcha = {
   url: string
}


export enum resultCode {
   unsuccessful = 1,
   successful = 0,
   captchaRequired = 10
}
export enum resultCodeCaptcha {
   captchaRequired = 10
}


export const auth = {
   // если пользователь осуществил доступ ранее - вернет данные
   getAccessUser() {
      return instance.get<getAccessUser>('auth/me')
         .then(res => res.data)
   },
   // Аутентификация
   login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
      return instance.post<login>('/auth/login', { email, password, rememberMe, captcha })
         .then(res => res.data)
   },
   // закончить сессию
   logout() {
      return instance.delete<logout>('/auth/login')
         .then(res => res.data)
   },
   // Получение капчи с сервера для проверки пользователя
   getCaptcha() {
      return instance.get<getCaptcha>('/security/get-captcha-url')
         .then(res => res.data)
   }
};
