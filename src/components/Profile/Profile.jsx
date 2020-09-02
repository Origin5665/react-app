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
      <Form postText={props.postText} dispatch={props.dispatch} />
      <Messages message={props.message} />
    </div>

  )
};


export default Profile;