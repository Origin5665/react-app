import React from 'react';
import UserBundle from './User.module.css';
import userIMG from '../../../images/user/user-photo.png';

const User = ({ data, subscribe, unsubscribe }) => {

  return (
    <li className={UserBundle.user__wrapper}>
      <div className={UserBundle.user__photoContainer}>
        <img className={UserBundle.user__image} src={data.photos.small ? data.photos.large : userIMG} alt="Автор" />
      </div>
      <div className={UserBundle.users__wrapperInfo}>
        <h3 className={UserBundle.user__name}>{data.name}</h3>
        <p className={UserBundle.user__status}>{data.status}</p>
      </div>
      {data.followed ? <button onClick={() => { unsubscribe(data.id) }}
        className={UserBundle.user__button}>Удалить</button> :
        <button onClick={() => { subscribe(data.id) }}
          className={UserBundle.user__button}>Добавить</button>}
    </li>
  )
};

export default User;