import { reduxForm, reset } from 'redux-form';
import React from 'react';
import MessagerForm from './MessagerForm';

const afterSubmit = (result, dispatch) =>
   dispatch(reset('messager-form'));


const MessagerFormReduxContainer = reduxForm({ form: 'messager-form', onSubmitSuccess: afterSubmit })(MessagerForm)

const MessagerFormBlock = ({ addUserMassage }) => {

   const sendNewMessage = React.useCallback(
      (formData) => {
         addUserMassage(formData.message)
      },
      [addUserMassage],
   );


   return <MessagerFormReduxContainer onSubmit={sendNewMessage} />
};


export default React.memo(MessagerFormBlock);