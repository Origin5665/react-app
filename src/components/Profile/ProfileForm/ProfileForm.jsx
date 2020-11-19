import React from 'react'
import { Field } from 'redux-form';
import { requaredField } from '../../../utils/validation';
import { ComponentInput } from '../../common/FormControls/FormControls';
import styles from './ProfileForm.module.css'

const ProfileForm = (props) => {



   return (

      <form className={styles.profileForm} onSubmit={props.handleSubmit} >
         <Field

            component={ComponentInput}
            name={'message'}
            typeField="textarea"
            className={styles.profileForm__textAria}
            placeholder="ваше сообщение..."
            validate={[requaredField]}

         ></Field>

         <button className={styles.profileForm__button} >Отправить</button>

      </form>



   )
}

export default ProfileForm
