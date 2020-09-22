import React from 'react';
import ProfileBundle from '../Profile/Profile.module.css';
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

const Profile = () => {

  return (
    <div className={ProfileBundle.profile}>
      <ProfileInfo />
      <FormBlockContainer />

    </div>
  )
};
export default Profile;