import React from 'react';
import PostBundle from './ProfilePost.module.css';


const ProfilePost = ({ message, like }) => {





    return (
        <div className={PostBundle.message}>
            <img className={PostBundle.message__image} src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1158&q=80"></img>
            <p className={PostBundle.message__text}>{message}</p>
            <div className={PostBundle.message__wrapperActiveBlock}>
                <span className={PostBundle.message__state}>{like}</span>
                <button className={PostBundle.message__buttonLike}></button>
            </div>

        </div>
    )
}

export default ProfilePost;