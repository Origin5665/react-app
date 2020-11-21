import React from 'react';

import styles from './MessagerForm.module.css';
import { Field } from 'redux-form';
import { ComponentInput } from '../../common/FormControls/FormControls';
import { requaredField } from '../../../utils/validation';


const MessagerForm = ({ handleSubmit }) => {

   return (
      <form onSubmit={handleSubmit}>
         <Field
            component={ComponentInput}
            typeField='textarea'
            name={'message'}
            placeholder="ваше сообщение..." type="text"
            validate={requaredField} />
         <button>Отправить</button>
      </form>
   )
};
export default MessagerForm;

