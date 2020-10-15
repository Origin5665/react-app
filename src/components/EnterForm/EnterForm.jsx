import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requaredField } from '../../utils/validation';
import { ComponentInput } from '../common/FormControls/FormControls';
import { loginCreator } from '../../redux/thunk/loginCreator';
import { logoutCreator } from '../../redux/thunk/logoutCreator';
import LoginForm from './EnterForm.module.css';
import { Redirect } from 'react-router-dom';

const maxLength10 = maxLengthCreator(10)

const EnterForm = (props) => {

   return (
      <div>
         <form onSubmit={props.handleSubmit} className={LoginForm.formWrapper}>
            <Field component={ComponentInput} validate={[requaredField]} typeField='input' name={'email'} type={'name'} className={LoginForm.input} placeholder='Email' />
            <Field component={ComponentInput} validate={[requaredField]} typeField='input' name={'password'} type={'password'} className={LoginForm.input} placeholder="Пароль" />
            <div>
               <Field component={ComponentInput} typeField='input' name={'remember'} type={"checkbox"} name="rememberMe" id="remember" />
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

const Login = ({ loginCreator, isAuth }) => {
   console.log(isAuth)
   const onSubmit = (formData) => {
      console.log(formData)

      loginCreator(
         formData.email,
         formData.password,
         formData.remeberMe
      )
   }

   if (isAuth === true) {
      return <Redirect to={'/profile'} />
   }

   return <div>
      (
         <h2 className={LoginForm.formTitle}>Добро пожаловать!</h2>
      <EnterFormContainer onSubmit={onSubmit} />
      )
   </div>


};
const mapState = state => {
   return {
      isAuth: state.auth.isAuth
   }
}

export default connect(mapState, { loginCreator })(Login);