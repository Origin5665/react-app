import React from 'react';
import FrofileInfo from '../ProfileInfo/ProfileInfo.module.css'


const ProfileInfo = () => {
   return (
      <div className="container">
         <div className={FrofileInfo.profile__wrapper}>
            <img alt="profile photo" className={FrofileInfo.profile__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <div className={FrofileInfo.profile__dataWrapper}>
               <p className={FrofileInfo.profile__text}>Бакуменко Александр</p>
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
};

export default ProfileInfo;