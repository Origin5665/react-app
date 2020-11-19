import React from 'react';
import classnames from 'classnames'
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from '../Profile/ProfileInfo/ProfileInfo';
import styles from './Profile.module.css'
import PreLoader from '../common/PreLoader/Preloader';
import PerfectScrollbar from 'react-perfect-scrollbar'

const Profile = (props) => {
  if (!props.data) {
    return <PreLoader />
  }
  return (

    <PerfectScrollbar>


      <div className={classnames("container", styles.profile__wrapper)}>
        <ProfileInfo
          uploadImageProfile={props.uploadImageProfile}
          owner={props.owner}
          status={props.status}
          data={props.data}
          setNewUserStatus={props.setNewUserStatusCreator} />
        <FormBlockContainer data={props.data} />
      </div>
    </PerfectScrollbar >
  )
};
export default Profile;