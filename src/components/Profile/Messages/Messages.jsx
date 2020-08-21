import React from 'react';
import Message from './Message/Message';

import MessagesBundle from '../Messages/Messages.module.css';

const Messages = () => {
  return (
    <div className={MessagesBundle.message__container}>
      <div className="container">
        <div className={MessagesBundle.messages__wrapper}>
          <Message message="This is my first React Project!" like='3' />
          <Message message="I need to find my girlfriend!" like='2' />
        </div>
      </div>
    </div>
  )
};

export default Messages;