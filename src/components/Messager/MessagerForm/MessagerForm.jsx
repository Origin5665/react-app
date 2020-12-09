import React from 'react';
import styles from './MessagerForm.module.css';
import { Field } from 'redux-form';
import { ComponentInput } from '../../common/FormControls/FormControls';
import { requaredField } from '../../../utils/validation';


const MessagerForm = ({ handleSubmit }) => {

   return (
      <form className={styles.form} onSubmit={handleSubmit}>
         <Field
            className={styles.form__textAria}
            component={ComponentInput}
            typeField='textarea'
            name={'message'}
            placeholder="Ваше сообщение..." type="text"
            validate={requaredField} />
         <button className={styles.form__button}>Отправить</button>
      </form>
   );
};
export default React.memo(MessagerForm);

