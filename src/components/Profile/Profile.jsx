import React from 'react';
import ProfileBundle from '../Profile/Profile.module.css';
import FormContainer from './Form/FormContainer'
import Messages from '../Profile/Messages/Messages';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

const Profile = () => {

  return (
    <div className={ProfileBundle.profile}>
      <ProfileInfo />
      <FormContainer />
      <Messages />
    </div>
  )
};
export default Profile;