import React from 'react';
import FrofileInfo from '../ProfileInfo/ProfileInfo.module.css'
import Preloader from '../../common/PreLoader/Preloader';

const ProfileInfo = (props) => {

   if (!props.data) {
      return <Preloader />
   } else {
      return (
         <div className="container">
            <div className={FrofileInfo.profile__wrapper}>
               <img alt="profile photo" className={FrofileInfo.profile__image} src={props.data.photos.large}></img>
               <div className={FrofileInfo.profile__dataWrapper}>
                  <h2 className={FrofileInfo.profile__text}>{props.data.fullName}</h2>
                  <div className={FrofileInfo.profile__wrapperInfo}>
                     <p className={FrofileInfo.profile__text}>День Рождения: 2 ноября</p>
                     <p className={FrofileInfo.profile__text}>Город: Ухта, Республика Коми</p>
                     <p className={FrofileInfo.profile__text}>Образование: Яндекс Практикум</p>
                     <p className={FrofileInfo.profile__text}>Сайт: GitHub.com</p>
                  </div>
               </div>
            </div>
         </div>
      )
   }
};



export default ProfileInfo;