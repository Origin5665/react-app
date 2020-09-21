import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css';


const DialogBlock = (props) => {

   const newMessage = React.createRef();
   const dialog = props.data.map((item, i) => <DialogMessage key={i} message={item.message} />);
   const sendMessage = (e) => {
      e.preventDefault();
      props.addMessage()
      newMessage.current.value = '';
   };

   const isChangeValue = (e) => {
      const text = newMessage.current.value;
      props.inputText(text)
   };

   return (
      <div className="DialogBlock.wrapper">
         <div className={DialogBlockBundle.dialogBlock__messageWrapper}>
            {dialog}
         </div>
         <form id="message-form" className={DialogBlockBundle.dialogBlock__form}>
            <textarea onChange={isChangeValue} required ref={newMessage} className={DialogBlockBundle.dialogBlock__input}
               placeholder="ваше сообщение..." type="text" />
            <button form="message-form" type="submit" onClick={sendMessage}
               className={DialogBlockBundle.dialogBlock__button}>Отправить</button>
         </form>
      </div>
   )
};


export default DialogBlock;