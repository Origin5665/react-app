import React from 'react';
import Preloader from '../../common/PreLoader/Preloader';
import userIMG from '../../../images/user/user-photo.png';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';
import ProfileContacts from '../ProfileDiscription/ProfileContacts';
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
      <div>
        <div>
          <img alt="Фото профиля" src={!data.photos.large
            ? userIMG
            : data.photos.large} />

          {owner ? null : <input onChange={onPhotoSelected} type={'file'} />}
          {owner ? null : <button onClick={toEdit}>Редактировать</button>}
          <div >
            <h2 >{data.fullName}</h2>
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