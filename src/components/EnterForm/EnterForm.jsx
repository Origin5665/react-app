import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requaredField } from '../../utils/validation';
import { ComponentInput } from '../common/FormControls/FormControls';
import LoginForm from './EnterForm.module.css';

const maxLength10 = maxLengthCreator(10)

const EnterForm = (props) => {

   return (
      <div>
         <form onSubmit={props.handleSubmit} className={LoginForm.formWrapper}>
            <Field component={ComponentInput} validate={[requaredField]} typeField='input' name={'login'} type={'name'} className={LoginForm.input} placeholder='Логин' />
            <Field component={ComponentInput} validate={[requaredField]} typeField='input' name={'password'} type={'password'} className={LoginForm.input} placeholder="Пароль" />
            <div>
               <Field component={ComponentInput} typeField='input' name={'remember'} type={"checkbox"} name="check-remember-me" id="remember" />
               <label style={{ color: '#ffffff', fontSize: 18 }} htmlFor="remember">Запомнить</label>
            </div>
            <button className={LoginForm.button} >Войти</button>
         </form>
      </div>
   )
};

// Form вызывает из props handleSubmit (из EnterFormContainer, образованного Hoc'ом redux-form )
// В контейнерную компоненту передаем собственный метод onSubmit

const EnterFormContainer = reduxForm({ form: 'enterForm' })(EnterForm);

const Login = (props) => {

   const onSubmit = (formData) => {
      console.log(formData)
   }

   return <div>
      (
         <h2 className={LoginForm.formTitle}>Добро пожаловать!</h2>
      <EnterFormContainer onSubmit={onSubmit} />
      )
   </div>


};

export default Login;