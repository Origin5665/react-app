import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './MessagerRoom.module.css'

const MessagerRoom = ({ roomName, roomID }) => {

   const path = `/dialogs/${roomID}`;

   return (
      <li className={styles.messagerRoom}>
         <NavLink
            activeClassName={styles.messagerRoom__link_active}
            className={styles.messagerRoom__link}
            to={path}>{roomName}</NavLink>
      </li >
   )
}

export default MessagerRoom
