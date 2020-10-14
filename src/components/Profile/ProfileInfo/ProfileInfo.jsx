import React from 'react';
import FrofileInfo from '../ProfileInfo/ProfileInfo.module.css';
import Preloader from '../../common/PreLoader/Preloader';
import userIMG from '../../../images/user/user-photo.png';
import ProfileStatus from '../ProfileStatus/ProfileStatus';

const ProfileInfo = ({ data, status, setStatus }) => {

  if (!data) {
    return <Preloader />
  } else {
    return (
      <div className="container">
        <div className={FrofileInfo.profile__wrapper}>
          <img alt="profile photo" className={FrofileInfo.profile__image} src={!data.photos.large
            ? userIMG
            : data.photos.large}></img>
          <div className={FrofileInfo.profile__dataWrapper}>
            <h2 className={FrofileInfo.profile__text}>{data.fullName}</h2>
            <ProfileStatus status={status} data={data} setStatus={setStatus} />
          </div>
        </div>
      </div>
    )
  }
};



export default ProfileInfo;