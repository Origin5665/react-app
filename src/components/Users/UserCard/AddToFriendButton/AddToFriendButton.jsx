import React, { Fragment } from 'react'
import styles from './AddToFriendButton.module.css';
const AddToFriendButton = ({
   data,
   // followingProgress,
   subscribeUser,
   unsubscribeUser }) => {

   const unsubscribe = () => unsubscribeUser(data.id);
   const subscribe = () => subscribeUser(data.id);

   return (
      <Fragment>
         {data.followed
            ? <button className={styles.usercard__button}
               // disabled={followingProgress.some(id => id === data.id)} ?
               onClick={unsubscribe} >Удалить</button>
            : <button className={styles.usercard__button}
               // disabled={followingProgress.some(id => id === data.id)} ?
               onClick={subscribe}>Добавить</button>}
      </Fragment>
   )
}

export default AddToFriendButton
