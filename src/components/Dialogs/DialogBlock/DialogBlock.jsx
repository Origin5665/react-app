import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css';
import { Field, reduxForm } from 'redux-form';
import { ComponentInput } from '../../common/FormControls/FormControls';
import { maxLengthCreator, requaredField } from '../../../utils/validation';
const maxLength30 = maxLengthCreator(50)

const DialogForm = ({ handleSubmit }) => {

   return (
      <form onSubmit={handleSubmit} className={DialogBlockBundle.dialogBlock__form}>
         <Field component={ComponentInput} typeField='textarea' name={'dialogMessage'} className={DialogBlockBundle.dialogBlock__input}
            placeholder="ваше сообщение..." type="text" />
         <button className={DialogBlockBundle.dialogBlock__button}>Отправить</button>
      </form>
   )
};

const DialogFormContainer = reduxForm({ form: 'dialogForm' })(DialogForm)

const DialogBlock = ({ actionCreatorPost, data }) => {

   const dialog = data.map((item, i) => <DialogMessage key={i} message={item.message} />);

   const sendNewMessage = message => {
      console.log(message)
      actionCreatorPost(message.dialogMessage)
   }

   return (
      <div className="DialogBlock.wrapper">
         <div className={DialogBlockBundle.dialogBlock__messageWrapper}>
            {dialog}
         </div>
         <DialogFormContainer onSubmit={sendNewMessage} />
      </div>
   )
};


export default DialogBlock;