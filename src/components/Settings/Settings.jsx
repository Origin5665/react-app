
import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../Settings/Settings.module.css'
import classnames from 'classnames';

import EditFormContainer from '../containers/EditFormContainer';
import ChangePhotoProfile from '../common/ChangePhotoProfile/ChangePhotoProfile';


const Settings = () => {

   const history = useHistory()

   const backToProfile = () => {
      history.push('/profile')
   };



   return (
      <div className={classnames("container", styles.settings__wrapper)}>
         <h2>Настройки</h2>
         <button className={styles.settings__button} onClick={backToProfile}>Вернуться к профилю</button>
         <ChangePhotoProfile />
         <EditFormContainer />
      </div>
   )
};

export default Settings;
