import React from 'react';
import DialogMessage from '../DialogMessage/DialogMessage';
import DialogBlockBundle from '../DialogBlock/DialogBlock.module.css';
import { Field, reduxForm } from 'redux-form';
import { ComponentInput } from '../../common/FormControls/FormControls';
import { maxLengthCreator, requaredField } from '../../../utils/validation';
const maxLength30 = maxLengthCreator(50)

const DialogForm = ({ handleSubmit }) => {

   return (
      <form onSubmit={handleSubmit}>
         <Field component={ComponentInput} typeField='textarea' name={'dialogMessage'}
            placeholder="ваше сообщение..." type="text" />
         <button>Отправить</button>
      </form>
   )
};

const DialogFormContainer = reduxForm({ form: 'dialogForm' })(DialogForm)

const DialogBlock = ({ actionCreatorPost, data }) => {

   const dialog = data.map((item, i) => <DialogMessage key={i} message={item.message} />);

   const sendNewMessage = message => {

      actionCreatorPost(message.dialogMessage)
   }

   return (
      <div >
         <div >
            {dialog}
         </div>
         <DialogFormContainer onSubmit={sendNewMessage} />
      </div>
   )
};


export default DialogBlock;