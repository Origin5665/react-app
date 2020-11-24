import React from 'react';
import classnames from 'classnames'
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import Preloader from '../common/Preloader/Preloader';


const Profile = (props) => {

   if (!props.data) {
      return <Preloader />
   }
   return (
      <div className={classnames("container", styles.profile__wrapper)}>
         <ProfileInfo
            uploadImageProfile={props.uploadImageProfile}
            owner={props.owner}
            status={props.status}
            data={props.data}
            setNewUserStatus={props.setNewUserStatus} />
         <FormBlockContainer data={props.data} />
      </div>
   )
};
export default Profile;