import React from 'react';
import { NavLink } from 'react-router-dom';


const MessagerRoom = ({ roomName, roomID }) => {
   console.log(roomName);
   const path = `/dialogs/${roomID}`;

   return (
      <li>
         <NavLink
            to={path}>
            {roomName}</NavLink>
      </li >
   )
}

export default MessagerRoom
