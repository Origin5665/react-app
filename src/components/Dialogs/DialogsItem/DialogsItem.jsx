import React from 'react';
import DialogsItemBundle from '../DialogsItem/DialogsItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogsItem = (props) => {
    const path = `/dialogs/${props.id}`

    return (
        <li>
            <NavLink activeClassName={DialogsItemBundle.dialogs__item_active} className={DialogsItemBundle.dialogs__item} to={path}>
                {props.name}</NavLink>
        </li >
    )
}

export default DialogsItem;