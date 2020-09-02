import React from 'react';
import MessageBundle from '../DialogMessage/DialogMessage.module.css'



const DialogMessage = (props) => {

    return (
        <div className={MessageBundle.dialog__wrapper}>
            <img alt="profile photo" className={MessageBundle.dialog__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <li className={MessageBundle.dialog__item}>
                {props.message}</li>
        </div>

    )
}

export default DialogMessage;