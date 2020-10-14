import React from 'react';
import ProfileBundle from '../Profile/Profile.module.css';
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';

const Profile = (props) => {

  return (
    <div className={ProfileBundle.profile}>
      <ProfileInfo status={props.status} data={props.data} setStatus={props.setNewUserStatusCreator} />
      <FormBlockContainer />

    </div>
  )
};
export default Profile;