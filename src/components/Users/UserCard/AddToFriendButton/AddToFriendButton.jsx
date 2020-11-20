import React, { Fragment } from 'react'
import styles from './AddToFriendButton.module.css';
const AddToFriendButton = ({
   data,
   followingProgress,
   followingCreator,
   outFollowingCreator }) => {
   return (
      <Fragment>
         {data.followed
            ? <button className={styles.usercard__button}
               disabled={followingProgress.some(id => id === data.id)}
               onClick={() => outFollowingCreator(data.id)} >Удалить</button>
            : <button className={styles.usercard__button}
               disabled={followingProgress.some(id => id === data.id)}
               onClick={() => followingCreator(data.id)} >Добавить</button>}
      </Fragment>
   )
}

export default AddToFriendButton
