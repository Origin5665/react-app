import React from 'react';
import ProfileBundle from '../Profile/Profile.module.css';
import MainBoard from '../Profile/MainBoard/MainBoard';
import Form from '../Profile/Form/Form';
import Messages from '../Profile/Messages/Messages';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';





const Profile = (props) => {

  return (
    <div className={ProfileBundle.profile}>
      <MainBoard />
      <ProfileInfo />
      <Form dispatch={props.dispatch} />
      <Messages message={props.profile.post} />
    </div>

  )
};


export default Profile;