import React from 'react';
import classnames from 'classnames';
import FormBlockContainer from './ProfileBlock/ProfileBlockContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import styles from './Profile.module.css';
import Preloader from '../common/Preloader/Preloader';
import { profileType } from '../../redux/reducers/profile';


type ProfileType = {
   userStatusUpdate: (status: string) => void
   status: string
   owner: number
   data: Array<profileType>
}
const Profile: React.FC<ProfileType> = (props) => {

   if (!props.data) {
      return <Preloader />
   }
   return (
      <div className={classnames("container", styles.profile__wrapper)}>
         <ProfileInfo
            data={props.data}
            userStatusUpdate={props.userStatusUpdate}
            owner={props.owner}
            status={props.status}
         />
         <FormBlockContainer />
      </div>
   )
};
export default Profile; 