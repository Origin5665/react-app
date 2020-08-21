import React from 'react';
import FormBundle from '../Form/Form.module.css';

const Form = () => {

  return (
    <form id="message-form">
      <div className="container">
        <div className={FormBundle.form__wrapper}>
          <h2 className={FormBundle.form__title}>My post</h2>
          <div className={FormBundle.form__field}>
            <input placeholder="your message..." required className={FormBundle.form__input}></input>
            <button className={FormBundle.form__button} type="submit">send</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;