import React from 'react'
import InputFiles from 'react-input-files';
import { connect } from 'react-redux';
import { userPhotoUpdate } from '../../../redux/reducers/profile';
import styles from './ChangePhotoProfile.module.css'

export const ChangePhotoProfile = ({ userPhotoUpdate }) => {
   const [alert, setAlert] = React.useState('');

   const onPhotoSelected = async (file) => {
      console.log(file);
      await userPhotoUpdate(file[0])
      setAlert('Обновленно!')

   }

   return (
      <div className={styles.profileInfo__buttonsGroup}>
         <InputFiles onChange={files => onPhotoSelected(files)}>
            <button>Новая фотография</button>
         </InputFiles>
         <p className={styles.profileInfo__alert}>{alert}</p>
      </div>
   )
};
export default connect(null, { userPhotoUpdate })(ChangePhotoProfile);