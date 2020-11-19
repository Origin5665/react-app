import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserCard.module.css'
import userIMG from '../../../images/user/user-photo.png';

const User = ({
  data,
  followingProgress,
  followingCreator,
  outFollowingCreator

}) => {

  return (
    <li className={styles.usercard}>
      <NavLink to={/profile/ + data.id} >
        <div className={styles.usercard__header}>
          <img className={styles.usercard__image}
            src={data.photos.small
              ? data.photos.large
              : userIMG} alt="Автор" />
          <h3 >{data.name}</h3>
        </div>
      </NavLink>
      <div >

        <p >{data.status}</p>

      </div>
      {data.followed
        ? <button className={styles.usercard__button} disabled={followingProgress.some(id => id === data.id)}
          onClick={() => outFollowingCreator(data.id)} >Удалить</button>
        : <button className={styles.usercard__button} disabled={followingProgress.some(id => id === data.id)}
          onClick={() => followingCreator(data.id)} >Добавить</button>}
    </li >
  )
};

export default User;