import React from 'react';
import { NavLink } from 'react-router-dom';

import userIMG from '../../../images/user/user-photo.png';

const User = ({
  data,
  followingProgress,
  followingCreator,
  outFollowingCreator

}) => {

  return (
    <li>
      <NavLink to={/profile/ + data.id} >
        <div >
          <img
            src={data.photos.small
              ? data.photos.large
              : userIMG} alt="Автор" />
        </div>
      </NavLink>
      <div >
        <h3 >{data.name}</h3>
        <p >{data.status}</p>
      </div>
      {data.followed
        ? <button disabled={followingProgress.some(id => id === data.id)}
          onClick={() => outFollowingCreator(data.id)} >Удалить</button>
        : <button disabled={followingProgress.some(id => id === data.id)}
          onClick={() => followingCreator(data.id)} >Добавить</button>}
    </li >
  )
};

export default User;