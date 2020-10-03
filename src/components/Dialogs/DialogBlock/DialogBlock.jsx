import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css';


const DialogBlock = ({ sendMessage, isChangeValue, data }) => {

   const newMessage = React.createRef();

   const dialog = data.map((item, i) => <DialogMessage key={i} message={item.message} />);

   const sendNewMessage = (e) => {
      e.preventDefault();
      sendMessage()
      newMessage.current.value = '';
   };

   const isChangeTextValue = () => {
      const text = newMessage.current.value;
      isChangeValue(text)
   };

   return (
      <div className="DialogBlock.wrapper">
         <div className={DialogBlockBundle.dialogBlock__messageWrapper}>
            {dialog}
         </div>
         <form id="message-form" className={DialogBlockBundle.dialogBlock__form}>
            <input onChange={isChangeTextValue} required ref={newMessage} className={DialogBlockBundle.dialogBlock__input}
               placeholder="ваше сообщение..." type="text" />
            <button form="message-form" type="submit" onClick={sendNewMessage}
               className={DialogBlockBundle.dialogBlock__button}>Отправить</button>
         </form>
      </div>
   )
};


export default DialogBlock;