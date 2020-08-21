import React from 'react';
import ProfileBundle from '../Profile/Profile.module.css';
import MainBoard from '../Profile/MainBoard/MainBoard';
import Form from '../Profile/Form/Form';
import Messages from '../Profile/Messages/Messages';


const Profile = () => {
  return (
    <div className={ProfileBundle.profile}>
      <MainBoard />
      <div className="container">
        <div className={ProfileBundle.profile__wrapper}>
          <img alt="profile photo" className={ProfileBundle.profile__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
          <div className={ProfileBundle.profile__dataWrapper}>
            <p className={ProfileBundle.profile__text}>Aleksandr B.</p>
            <div className={ProfileBundle.profile__wrapperInfo}>
              <p className={ProfileBundle.profile__text}>Date of Birth: 2 november</p>
              <p className={ProfileBundle.profile__text}>city: Ukhta</p>
              <p className={ProfileBundle.profile__text}>Edication: Yandex Praktikum</p>
              <p className={ProfileBundle.profile__text}>Web site: GitHub.com</p>
            </div>
          </div>
        </div>
      </div>
      <Form />
      <Messages />
    </div>

  )
};


export default Profile;