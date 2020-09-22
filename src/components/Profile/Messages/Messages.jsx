import React from 'react';
import Message from './Message/Message';
import MessagesBundle from '../Messages/Messages.module.css';



const Messages = ({ state }) => {

  const message = state.getState().profile.post.map((item, i) =>
    < Message key={i} message={item.message} like={item.count} />)

  return (
    <div className={MessagesBundle.message__container}>
      <div className="container">
        <div className={MessagesBundle.messages__wrapper}>
          {message}
        </div>
      </div>
    </div>
  )

};

export default Messages;