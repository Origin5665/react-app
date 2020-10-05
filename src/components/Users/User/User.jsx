import React from 'react';
import { NavLink } from 'react-router-dom';
import { followAPI } from '../../../API/followAPI';
import UserBundle from './User.module.css';
import userIMG from '../../../images/user/user-photo.png';


const User = ({ data, subscribe, unsubscribe, followingProgress, setFollowingState }) => {

  const getFollowF = (id) => {
    setFollowingState(true, id)
    followAPI.getFollow(id)
      .then(res => { if (res.resultCode === 0) subscribe(id) })
      .then(() => setFollowingState(false, id))

  };

  const outFollowF = (id) => {
    setFollowingState(true, id)
    followAPI.outFollow(id)
      .then(res => {
        if (res.resultCode === 0) {
          unsubscribe(id)
        }
      })
      .then(() => setFollowingState(false, id))
  };



  return (
    <li className={UserBundle.user__wrapper}>
      <NavLink to={/profile/ + data.id} >
        <div className={UserBundle.user__photoContainer}>
          <img className={UserBundle.user__image}
            src={data.photos.small ? data.photos.large : userIMG} alt="Автор" />
        </div>
      </NavLink>
      <div className={UserBundle.users__wrapperInfo}>
        <h3 className={UserBundle.user__name}>{data.name}</h3>
        <p className={UserBundle.user__status}>{data.status}</p>
      </div>
      {data.followed ?
        <button disabled={followingProgress.some(id => id === data.id)}
          onClick={() => outFollowF(data.id)} className={followingProgress.some(id => id === data.id) ?
            UserBundle.user__buttonDis : UserBundle.user__button}>Удалить</button> :
        <button disabled={followingProgress.some(id => id === data.id)}
          onClick={() => getFollowF(data.id)} className={followingProgress.some(id => id === data.id) ?
            UserBundle.user__buttonDis : UserBundle.user__button}>Добавить</button>}
    </li >
  )
};

export default User;