import { reduxForm, reset } from 'redux-form';
import React from 'react';
import MessagerForm from './MessagerForm';

const afterSubmit = (result, dispatch) =>
   dispatch(reset('messager-form'));


const MessagerFormReduxContainer = reduxForm({ form: 'messager-form', onSubmitSuccess: afterSubmit })(MessagerForm)

const MessagerFormBlock = ({ actionCreatorPost }) => {

   const sendNewMessage = React.useCallback(
      (formData) => {
         actionCreatorPost(formData.message)
      },
      [actionCreatorPost],
   )
   // const sendNewMessage = formData => {
   //    actionCreatorPost(formData.message)
   // }

   return <MessagerFormReduxContainer onSubmit={sendNewMessage} />
};


export default React.memo(MessagerFormBlock);