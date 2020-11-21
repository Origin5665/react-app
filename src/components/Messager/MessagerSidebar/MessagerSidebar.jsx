import React from 'react';
import { useSelector } from 'react-redux';
import MessagerRoom from '../MessagerRoom/MessagerRoom';
import styles from './MessagerSidebar.module.css';

const MessagerSidebar = () => {

   const roomsState = useSelector(state => state.user.dialog);

   const rooms = roomsState.map(room =>
      <MessagerRoom key={room.name} roomName={room.name} roomID={room.id} />)

   return (
      <ul className={styles.messagerRoomList}>
         {rooms}
      </ul>
   )
};

export default MessagerSidebar;