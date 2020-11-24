import React from 'react';
import styles from './ProfilePost.module.css';


const ProfilePost = ({ message, like, image, date }) => {





   return (
      <div className={styles.post}>
         <div className={styles.post__header}>
            <img className={styles.post__authorImage}
               alt={'Фотография автора поста'}
               src={image}></img>
            <b>{date}</b>
         </div>

         <p className={styles.post__body}>{message}</p>


      </div >
   )

}

export default ProfilePost;