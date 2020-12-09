import React from 'react';
import styles from './MessagerChat.module.css';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';

const MessagerChat = () => {

   const messageState = useSelector(state => state.messager.message);
   const messages = messageState.map((item, i) => <Message key={i} message={item.message} />);

   return (
      <div className={styles.messagerChat}>
         <div>
            <h3>Собеседник</h3>
         </div>
         {messages}
      </div>
   );
};

export default (MessagerChat);
