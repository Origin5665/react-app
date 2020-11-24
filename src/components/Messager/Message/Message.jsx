import React from 'react';
import userImage from './../../../images/user.svg'
import styles from './Message.module.css'
import { iosCloseEmpty } from 'react-icons-kit/ionicons/iosCloseEmpty'

import { Icon } from 'react-icons-kit'

const Message = (props) => {


   return (
      <li className={styles.message}>
         <div className={styles.message__body}>
            <div className={styles.message__rightSide}>
               <img className={styles.message__image} alt="Фотография автора сообщения" src={userImage} />
               <p className={styles.message__text}>{props.message}</p>
            </div>
            <div className={styles.message__leftSide}>
               <span className={styles.message__date}>14:00</span>
               <button className={styles.message__button}><Icon icon={iosCloseEmpty} /></button>
            </div>
         </div>


      </li>
   )
};

export default Message;