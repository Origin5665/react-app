import React from 'react';
import MessageBundle from './Message.module.css';

const Message = (props) => {
    return (
        <div className={MessageBundle.message}>
            <img className={MessageBundle.message__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <p className={MessageBundle.message__text}>{props.message}</p>
            <div className={MessageBundle.message__wrapperActiveBlock}>
                <span className={MessageBundle.message__state}>{props.like}</span>
                <button className={MessageBundle.message__buttonLike}></button>
            </div>

        </div>
    )
};

export default Message;