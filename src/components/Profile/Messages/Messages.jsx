import React from 'react';
import Message from './Message/Message';
import MessagesBundle from '../Messages/Messages.module.css';
import ContextStore from '../../../ContextStore';


const Messages = () => {
  return (
    <ContextStore.Consumer>
      {
        (store) => {
          const message = store.getState().profile.post.map((item, i) =>
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
        }
      }
    </ContextStore.Consumer>
  )

};

export default Messages;