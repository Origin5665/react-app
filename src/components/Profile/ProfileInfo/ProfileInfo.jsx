import React from 'react';
// import Preloader from '../../common/PreLoader/Preloader';
import userIMG from '../../../images/user/user-photo.png';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileContacts from '../ProfileDiscription/ProfileContacts';
import styles from './ProfileInfo.module.css';
import { useHistory } from 'react-router-dom';
import { profileType } from '../../../redux/reducers/profile';

// type ProfileInfoType = {
//   data: profileType
//   status: string
//   owner: number
//   userStatusUpdate: (status: string) => void
// }


const ProfileInfo = ({ data, status, owner, userStatusUpdate }) => {
  console.log(data);

  const history = useHistory();

  const editHandler = () => {
    console.log('daw');
    history.push('/settings')
  }

  return (
    <div className={styles.profileInfo__wrapper}>
      <div className={styles.profileInfo__avatar}>
        <img className={styles.profileInfo__image} alt="фотография профиля" src={!data.photos.large
          ? userIMG
          : data.photos.large} />
        {owner ? null : <button onClick={editHandler} className={styles.profileInfo__button}>Редактировать профиль</button>}
      </div>
      <div className={styles.profileInfo__infoWrapper}>
        <h2 className={styles.profileInfo__name}>{data.fullName}</h2>
        <ProfileStatus
          status={status}

          userStatusUpdate={userStatusUpdate} />
        <p className={styles.profileInfo__text}><b>В поиске работы:</b> {data.lookingForAJob ? 'Да' : 'Нет'}</p>
        <p className={styles.profileInfo__text}><b>Навыки:</b> {data.lookingForAJobDescription}</p>
        {/* <p className={styles.profileInfo__text}><b>Обо мне:</b> {data.aboutMe}</p> */}
        <ProfileContacts data={data} />
      </div>
    </div >
  );
};

export default ProfileInfo;