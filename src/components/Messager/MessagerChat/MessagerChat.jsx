import React from 'react';
import styles from './MessagerChat.module.css';
import Message from '../Message/Message';
import { useSelector } from 'react-redux';
const MessagerChat = ({ data }) => {

   const messageState = useSelector(state => state.dialogs.message)


   const messages = messageState.map((item, i) => <Message key={i} message={item.message} />);


   return (
      <div>
         {messages}
      </div>
   );
};

export default MessagerChat;
