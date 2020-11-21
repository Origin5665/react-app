import React from 'react';
import userImage from './../../../images/user.svg'
import styles from './Message.module.css'


const Message = (props) => {


   return (
      <li className={styles.message}>
         <img className={styles.message__image} alt="Фотография автора сообщения" src={userImage}></img>
         <p className={styles.message__body}>{props.message}</p>
         <span className={styles.message__date}>14:00</span>
         <button className={styles.message__button}>Удалить</button>
      </li>
   )
};

export default Message;