import React from 'react';
import DialogsItemBundle from '../DialogsItem/DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {

   const path = `/dialogs/${props.id}`;
   return (
      <li className={DialogsItemBundle.dialogs__item}>
         <img src={props.photo} alt="" width="30px" />
         <NavLink activeClassName={DialogsItemBundle.dialogs__link_active}
            className={DialogsItemBundle.dialogs__link} to={path}>
            {props.name}</NavLink>
      </li >
   )
};

export default DialogsItem;