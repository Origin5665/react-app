import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { requaredField } from '../../utils/validation';
import { ComponentInput } from '../common/FormControls/FormControls';
import { loginCreator } from '../../redux/thunk/loginCreator';
import LoginForm from './EnterForm.module.css';
import { Redirect } from 'react-router-dom';

// const maxLength10 = maxLengthCreator(10)

const EnterForm = (props) => {
   console.log(props)
   return (
      <div>
         <form onSubmit={props.handleSubmit} className={LoginForm.formWrapper}>
            <Field
               component={ComponentInput}
               validate={[requaredField]}
               typeField='input'
               name={'email'}
               type={'name'}
               className={LoginForm.input}
               placeholder='Email' />
            <Field
               component={ComponentInput}
               validate={[requaredField]}
               typeField='input'
               name={'password'}
               type={'password'}
               className={LoginForm.input}
               placeholder="Пароль" />
            <div>
               <Field component={ComponentInput} typeField='input'
                  type={"checkbox"}
                  name="rememberMe"
                  id="remember" />
               <label style={{ color: '#ffffff', fontSize: 18 }}
                  htmlFor="remember">Запомнить</label>
            </div>
            {
               props.captcha
                  ? <div>
                     <img src={props.captcha} alt="Искаженные символы на изображении" />
                     <Field
                        validate={[requaredField]}
                        typeField={'input'}
                        type="text"
                        name={'captcha'}
                        placeholder={'Введите символы'}
                        component={ComponentInput}
                        className={LoginForm.input} />
                  </div>
                  : null
            }

            <button className={LoginForm.button} >Войти</button>
            <p className={LoginForm.error}>{props.error ? props.error : ''}</p>
         </form>
      </div>
   )
};

// Form вызывает из props handleSubmit (из EnterFormContainer, образованного Hoc'ом redux-form )
// В контейнерную компоненту передаем собственный метод onSubmit

const EnterFormContainer = reduxForm({ form: 'enterForm' })(EnterForm);

const Login = ({ loginCreator, isAuth, captcha }) => {

   const onSubmit = (formData) => {
      loginCreator(
         formData.email,
         formData.password,
         formData.remeberMe,
         formData.captcha

      )
   }

   if (isAuth === true) {
      return <Redirect to={'/profile'} />
   }

   return (
      <div>
         <h2 className={LoginForm.formTitle}>Добро пожаловать!</h2>
         <EnterFormContainer captcha={captcha} onSubmit={onSubmit} />
      </div>
   )


};
const mapState = state => {
   return {
      isAuth: state.auth.isAuth,
      captcha: state.auth.captchaUrl
   }
}

export default connect(mapState, { loginCreator })(Login);