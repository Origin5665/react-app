import React from 'react';
import FrofileInfo from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/PreLoader/Preloader';
import userIMG from '../../../images/user/user-photo.png';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';

import FormPage from '../PhotoUpload/PhotoUpload';
import ProfileContacts from '../ProfileDiscription/ProfileContacts';
import Modal from '../../common/Modal/Modal';
import { useHistory } from 'react-router-dom';

const ProfileInfo = ({ owner, data, status, setStatus, uploadImageProfile }) => {
  console.log(data)
  const history = useHistory();

  const onPhotoSelected = (e) => {
    const profilePhoto = e.target.files[0]

    uploadImageProfile(profilePhoto)
  }
  const toEdit = () => {

    history.push('/settings')
  }

  if (!data) {
    return <Preloader />
  } else {
    return (
      <div className="container">
        <div className={FrofileInfo.profile__wrapper}>
          <img alt="Фото профиля" className={FrofileInfo.profile__image} src={!data.photos.large
            ? userIMG
            : data.photos.large} />

          {owner ? null : <input onChange={onPhotoSelected} type={'file'} />}
          {owner ? null : <button onClick={toEdit}>Редактировать</button>}
          <div className={FrofileInfo.profile__dataWrapper}>
            <h2 className={FrofileInfo.profile__text}>{data.fullName}</h2>
            <ProfileStatusHooks status={status} data={data} setStatus={setStatus} />
            <p>В поиске работы: {data.lookingForAJob ? 'Да' : 'Нет'}</p>
            {data.lookingForAJob && <p>Что именно: {data.lookingForAJobDescription}</p>}
            {data.aboutMe ?? <p>Обо мне: {data.aboutMe}</p>}
            <ProfileContacts data={data} />
          </div>
        </div>
      </div>
    )
  }
};



export default ProfileInfo;