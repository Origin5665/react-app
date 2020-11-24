import { ADD_POST, SET_NEW_PHOTO, SET_USER, GET_CURRENT_STATUS } from '../../constant';

// Отправка Поста =>
export const actionCreatorPost = (text) => ({ type: ADD_POST, value: text })

// Получение профиля =>
export const setUserProfile = (profile) => ({ type: SET_USER, profile: profile })

// Новый статус =>
export const getCurrentStatus = (statusText) => ({ type: GET_CURRENT_STATUS, status: statusText })

// Обновление фотографии
export const newPhotoSucces = (image) => ({ type: SET_NEW_PHOTO, image })

