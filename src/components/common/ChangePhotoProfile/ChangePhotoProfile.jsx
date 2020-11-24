import React from 'react'
import InputFiles from 'react-input-files';
import { connect } from 'react-redux';
import { uploadImageProfile } from '../../../redux/thunk/uploadImageProfile';
import styles from './ChangePhotoProfile.module.css'

export const ChangePhotoProfile = ({ uploadImageProfile }) => {
   const [alert, setAlert] = React.useState('')
   const onPhotoSelected = async (file) => {
      console.log(file);
      await uploadImageProfile(file[0])

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
export default connect(null, { uploadImageProfile })(ChangePhotoProfile);