import React from 'react';
import MessageBundle from '../DialogMessage/DialogMessage.module.css'



const DialogMessage = (props) => {

    return (
        <li className={MessageBundle.dialog__item}>
            {props.message}</li>
    )
}

export default DialogMessage;