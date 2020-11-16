import React from 'react';
import styles from './Profile.module.css'
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';


const Profile = (props) => {

  return (
    <div className="container">
      <ProfileInfo
        uploadImageProfile={props.uploadImageProfile}
        owner={props.owner}
        status={props.status}
        data={props.data}
        setStatus={props.setNewUserStatusCreator} />
      <FormBlockContainer />
    </div>
  )
};
export default Profile;