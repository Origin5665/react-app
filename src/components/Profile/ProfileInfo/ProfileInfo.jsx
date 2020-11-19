import React, { Fragment } from 'react';
import Preloader from '../../common/PreLoader/Preloader';
import userIMG from '../../../images/user/user-photo.png';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileContacts from '../ProfileDiscription/ProfileContacts';
import { useHistory } from 'react-router-dom';
import styles from './../Profile.module.css'
import ButtonGroup from '../../common/ButtonGroup/ButtonGroup';


const ProfileInfo = ({ owner, data, status, setNewUserStatus, uploadImageProfile }) => {


  const history = useHistory();



  const onPhotoSelected = (file) => {


    uploadImageProfile(file[0])

  }



  const toEditProfile = () => {
    history.push('/settings')
  }



  return (
    <div className={styles.profileInfo__wrapper}>
      <div className={styles.profileInfo__avatar}>
        <img className={styles.profileInfo__image} alt="фотография профиля" src={!data.photos.large
          ? userIMG
          : data.photos.large} />

        {/* {owner ? null : <ButtonGroup />} */}
      </div>

      <div className={styles.profileInfo__infoWrapper}>
        <h2 className={styles.profileInfo__name}>{data.fullName}</h2>
        <ProfileStatus
          status={status}
          data={data}
          setNewUserStatus={setNewUserStatus} />
        <p className={styles.profileInfo__text}>В поиске работы: {data.lookingForAJob ? 'Да' : 'Нет'}</p>
        {data.lookingForAJob && <p className={styles.profileInfo__text}>Навыки: {data.lookingForAJobDescription}</p>}
        {data.aboutMe && <p className={styles.profileInfo__text}>Обо мне: {data.aboutMe}</p>}
        <ProfileContacts data={data} />
      </div>
    </div >

  )

};



export default ProfileInfo;