import React from 'react';
import { Link } from 'react-router-dom';
import styles from './UserCard.module.css'
import userIMG from '../../../images/user/user-photo.png';
import AddToFriendButton from './AddToFriendButton/AddToFriendButton';

const User = ({
   data,
   followingProgress,
   subscribeUser,
   unsubscribeUser
}) => {

   return (
      <li className={styles.usercard}>
         <Link className={styles.usercard__link} to={/profile/ + data.id} >
            <div className={styles.usercard__header}>
               <img className={styles.usercard__image}
                  src={data.photos.small
                     ? data.photos.large
                     : userIMG} alt="Автор" />
               <h3 className={styles.usercard__name}>{data.name}</h3>
            </div>
         </Link>
         <p className={styles.usercard__text}>{data.status}</p>
         <AddToFriendButton
            data={data}
            followingProgress={followingProgress}
            subscribeUser={subscribeUser}
            unsubscribeUser={unsubscribeUser} />
      </li >
   );
};

export default User;

