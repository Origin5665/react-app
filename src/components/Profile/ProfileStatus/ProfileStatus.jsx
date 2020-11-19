import React, { useState, useEffect, Fragment } from 'react';
import InputStatus from '../../common/InputStatus/InputStatus';
import styles from './../Profile.module.css';

const ProfileStatus = ({ status, data, setNewUserStatus }) => {

   const [edit, setEdit] = useState(false);


   const statusEditToggle = () => setEdit(!edit)







   return (
      <Fragment>
         { !edit
            ? <p
               className={styles.profileStatus__text}
               onDoubleClick={statusEditToggle}>
               <b>Cтатус:</b> {status}</p>
            : <InputStatus
               statusEditToggle={statusEditToggle}
               status={status}
               setNewUserStatus={setNewUserStatus} />}
      </Fragment>
   )

};

export default ProfileStatus;