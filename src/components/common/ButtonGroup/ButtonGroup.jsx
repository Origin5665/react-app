import React from 'react'
import InputFiles from 'react-input-files';
import styles from './ButtonGroup.module.css'
export const ButtonGroup = ({ onPhotoSelected, toEditProfile }) => {
   return (
      <div className={styles.profileInfo__buttonsGroup}>
         <InputFiles onChange={files => onPhotoSelected(files)}>
            <button>Фотография</button>
         </InputFiles>
         <button onClick={toEditProfile}>Редактировать</button>
      </div>


   )
}
export default ButtonGroup;