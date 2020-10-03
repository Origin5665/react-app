import React from 'react';
import Login from './EnterForm.module.css';
const EnterForm = ({ state }) => {




   return (
      <div>
         <h2 className={Login.formTitle}>Добро пожаловать!</h2>
         <div className={Login.formWrapper}>
            <input className={Login.input} placeholder='Логин'></input>
            <input className={Login.input} placeholder="Пароль"></input>
            <button className={Login.button}>Войти</button>
         </div>
      </div>

   )
};

export default EnterForm;