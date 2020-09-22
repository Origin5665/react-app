import React from 'react';
import UserBundle from './User.module.css';
import userIMG from '../../../images/user/user-photo.png';
import userIMGX2 from '../../../images/user/user-photo.webp';



const User = ({ state, subscribe, unsubscribe }) => {
  console.log(state)




  return (
    <li className={UserBundle.user__wrapper}>
      <picture className={UserBundle.user__photoContainer}>
        <source type="image/webp" srcSet={userIMGX2} />
        <img className={UserBundle.user__image} src={userIMG} alt="Автор" />
      </picture>
      <div className={UserBundle.users__wrapperInfo}>
        <h3 className={UserBundle.user__name}>{state.name}</h3>
        <p className={UserBundle.user__status}>{state.status}</p>
        <div className={UserBundle.user__location}>
          <p className={UserBundle.user__city}>{state.location.city}</p>
          <p className={UserBundle.user__country}>{state.location.country}</p>
        </div>
      </div>

      {state.add ? <button onClick={() => { unsubscribe(state.ID) }} className={UserBundle.user__button}>Удалить</button>
        : <button onClick={() => { subscribe(state.ID) }} className={UserBundle.user__button}>Добавить</button>}
    </li>
  )
};

export default User;