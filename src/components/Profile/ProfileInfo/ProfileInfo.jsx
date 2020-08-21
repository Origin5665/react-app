import React from 'react';
import FrofileInfo from '../ProfileInfo/ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div className="container">
         <div className={FrofileInfo.profile__wrapper}>
            <img alt="profile photo" className={FrofileInfo.profile__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <div className={FrofileInfo.profile__dataWrapper}>
               <p className={FrofileInfo.profile__text}>Aleksandr B.</p>
               <div className={FrofileInfo.profile__wrapperInfo}>
                  <p className={FrofileInfo.profile__text}>Date of Birth: 2 november</p>
                  <p className={FrofileInfo.profile__text}>city: Ukhta</p>
                  <p className={FrofileInfo.profile__text}>Edication: Yandex Praktikum</p>
                  <p className={FrofileInfo.profile__text}>Web site: GitHub.com</p>
               </div>
            </div>
         </div>
      </div>
   )
};

export default ProfileInfo;