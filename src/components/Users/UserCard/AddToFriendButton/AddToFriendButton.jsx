import React, { Fragment } from 'react'
import styles from './AddToFriendButton.module.css';
const AddToFriendButton = ({
   data,
   followingProgress,
   subscribeUser,
   unsubscribeUser }) => {
   return (
      <Fragment>
         {data.followed
            ? <button className={styles.usercard__button}
               disabled={followingProgress.some(id => id === data.id)}
               onClick={() => unsubscribeUser(data.id)} >Удалить</button>
            : <button className={styles.usercard__button}
               disabled={followingProgress.some(id => id === data.id)}
               onClick={() => subscribeUser(data.id)}>Добавить</button>}
      </Fragment>
   )
}

export default AddToFriendButton
