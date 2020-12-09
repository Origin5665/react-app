
import { ADD_POST, SET_NEW_PHOTO, SET_USER_PROFILE, GET_CURRENT_STATUS } from '../../constant';
import { getProfileAPI } from '../../API/profileAPI';
import { stopSubmit } from 'redux-form';


/* @TYPES */

type initialStateType = typeof initialState;

type postType = {
   id: number
   message: string
   count: number
   date: string
};

/* @Profile */
type profileType = {
   userId: number
   lookingForAJob: boolean
   lookingForAJobDescription: string | null
   fullName: string | null
   contacts: contactsType
   photos: photoType
};
/* => Photo */
export type photoType = {
   small: string | null
   large: string | null
};
/* => Contacts */
type contactsType = {
   github: string | null
   vk: string | null
   facebook: string | null
   instagram: string | null
   twitter: string | null
   website: string | null
   youtube: string | null
   mainLink: string | null
};

/* @Action */
type addUserPostType = {
   type: typeof ADD_POST,
   post: string
};

type newPhotoSuccesType = {
   type: typeof SET_NEW_PHOTO,
   image: photoType
};

type getCurrentStatusType = {
   type: typeof GET_CURRENT_STATUS,
   status: string
}
type setUserProfileType = {
   type: typeof SET_USER_PROFILE,
   profile: profileType
}

/* INITIAL STATE */

const initialState = {
   post: [{ id: 1, message: 'Вышел новый альбом Хаски!', count: 10, date: '07.10.20' }] as Array<postType>,
   profile: null as profileType | null,
   status: ""
};

/* ACTION */

// Добавляет пост =>
export const addUserPost = (post: string): addUserPostType => ({ type: ADD_POST, post })

// Добавляет данные профиля =>
export const setUserProfile = (profile: profileType): setUserProfileType => ({ type: SET_USER_PROFILE, profile })

// Обновляет статус =>
export const setUserStatus = (status: string): getCurrentStatusType => ({ type: GET_CURRENT_STATUS, status })

// Получает статус =>
export const getUserStatus = (status: string): getCurrentStatusType => ({ type: GET_CURRENT_STATUS, status })

// Обновление фотографии =>
export const newPhotoSucces = (image: photoType): newPhotoSuccesType => ({ type: SET_NEW_PHOTO, image })


/* THUNK */

/* Получает данные профиля по id */

export const getUserProfile = (userId: number) => async (dispatch: any) => {
   const res = await getProfileAPI.getUserProfile(userId)
   dispatch(setUserProfile(res))
};

/* Обновляет статус пользователя */

export const userStatusUpdate = (status: string) => async (dispatch: any) => {
   try {
      const res = await getProfileAPI.sendNewUserStatus(status);
      if (res.data.resultCode === 0) dispatch(setUserStatus(status));
   } catch (error) {
      console.log('Ошибка: ' + error);
   }
};

export const getCurrentUserStatus = (id: number) => async (dispatch: any) => {
   try {
      const response = await getProfileAPI.getСurrentUserStatus(id)
      dispatch(getUserStatus(response))
   } catch (error) {
      console.log('Ошибка: ' + error)
   }
};

/*  Обновляет данные пользователя */

export const userProfileUpdate = (body: any) => async (dispatch: any, getState: any) => {
   const userId = getState().auth.userId
   const response = await getProfileAPI.updateProfileData(body)
   if (response.resultCode === 0) {
      dispatch(getUserProfile(userId))
   } else if (response.resultCode === 1) {
      let key = response.messages[0].match(/Contacts->(\w+)/)[1].toLowerCase();
      const displayError = stopSubmit('edit-profile', { "contacts": { [key]: response.messages[0] } })
      dispatch(displayError)
      return Promise.reject(response.messages[0])
   }
};

/* Обновляет фотографию пользователя */

export const userPhotoUpdate = (file: any) => async (dispatch: any) => {
   const res = await getProfileAPI.updateProfilePhoto(file);
   dispatch(newPhotoSucces(res))
};

const profileReducer = (state = initialState, action: any): initialStateType => {

   switch (action.type) {
      case ADD_POST:
         return {
            ...state,
            post: [{ id: 5, message: action.post, count: 10, date: new Date().toLocaleDateString() }, ...state.post]
         };

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile
         };

      case GET_CURRENT_STATUS:
         return {
            ...state,
            status: action.status
         };

      case SET_NEW_PHOTO:
         return {
            ...state,
            profile: { ...state.profile, photos: action.image } as profileType //??
         };

      default:
         return state
   };
};


export default profileReducer;