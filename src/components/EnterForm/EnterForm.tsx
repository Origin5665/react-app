import React from 'react';
import { connect } from 'react-redux';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { requaredField } from '../../utils/validation';
import { ComponentInput } from '../common/FormControls/FormControls';
import { userLogin } from '../../redux/reducers/auth';
import LoginForm from './EnterForm.module.css';
import { Redirect } from 'react-router-dom';
import { rootStateType } from '../../redux/reducers';

const EnterForm: React.FC<InjectedFormProps<formDataType, formOwnProps> & formOwnProps> = ({ handleSubmit, error, captcha }) => {

   return (

      <form className={LoginForm.formWrapper}>
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
            <label style={{ color: '#000', fontSize: 18 }}
               htmlFor="remember">Запомнить</label>
         </div>
         {
            captcha
               ? <div>
                  <img src={captcha} alt="Искаженные символы на изображении" />
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

         <button onClick={handleSubmit} className={LoginForm.button}>Войти</button>
         <p className={LoginForm.error}>{error ? error : ''}</p>
      </form>

   )
};

// Form вызывает из props handleSubmit (из EnterFormContainer, образованного Hoc'ом redux-form )
// В контейнерную компоненту передаем собственный метод onSubmit

const EnterFormContainer = reduxForm<formDataType, formOwnProps>({ form: 'enterForm' })(EnterForm);

interface formDataType {
   email: string,
   password: string,
   remeberMe: boolean,
   captcha: string
}

interface formOwnProps {
   captcha: string | null
}


const Login: React.FC<mapStateType & mapDispatch> = ({ userLogin, isAuth, captcha }) => {

   const onSubmit = (formData: formDataType) => {
      userLogin(
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
      <div className="container">
         <h2 className={LoginForm.formTitle}>Вход</h2>
         <EnterFormContainer captcha={captcha} onSubmit={onSubmit} />
      </div>
   )


};
type mapStateType = {
   isAuth: boolean
   captcha: string | null
}

type mapDispatch = {
   userLogin: (email: string, password: string, rememberMe: boolean, captchaUrl?: string) => void
}

const mapState = (state: rootStateType): mapStateType => {
   return {
      isAuth: state.auth.isAuth,
      captcha: state.auth.captcha
   }
}

export default connect(mapState, { userLogin })(Login);