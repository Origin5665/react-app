import React from 'react';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

   const path = `/dialogs/${props.id}`;
   return (
      <li>
         <img src={props.photo} alt="" width="30px" />
         <NavLink
            to={path}>
            {props.name}</NavLink>
      </li >
   )
};

export default DialogsItem;