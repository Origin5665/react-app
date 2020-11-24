import React from 'react';
import InputStatus from '../../common/InputStatus/InputStatus';
import styles from './ProfileStatus.module.css';

const ProfileStatus = ({ status, setNewUserStatus }) => {

   const [edit, setEdit] = React.useState(false);
   const statusEditToggle = () => setEdit(!edit)

   return (
      <React.Fragment>
         { !edit
            ? <p
               className={styles.profileStatus__text}
               onDoubleClick={statusEditToggle}>
               <b>Cтатус:</b> {status}</p>
            : <InputStatus
               statusEditToggle={statusEditToggle}
               status={status}
               setNewUserStatus={setNewUserStatus} />}
      </React.Fragment>
   );
};

export default ProfileStatus;