import { reduxForm } from 'redux-form';
import React from 'react';
import MessagerForm from './MessagerForm';



const MessagerFormReduxContainer = reduxForm({ form: 'dialogForm' })(MessagerForm)

const MessagerFormBlock = ({ actionCreatorPost }) => {

   const sendNewMessage = formData => {
      actionCreatorPost(formData.message)
   };

   return <MessagerFormReduxContainer onSubmit={sendNewMessage} />
};


export default MessagerFormBlock;