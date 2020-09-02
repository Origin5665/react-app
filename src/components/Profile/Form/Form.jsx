import React from 'react';
import FormBundle from '../Form/Form.module.css';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/state';

const Form = (props) => {

  const newMessage = React.createRef();
  const form = document.querySelector('#message-form');


  const addPostMessage = (e) => {

    e.preventDefault();
    props.dispatch(e, actionCreatorPost());
    form.reset()
  }

  const isChangeValue = (e) => {
    const mes = newMessage.current.value;
    props.dispatch(e, actionCreatorMessage(mes));
  }

  return (
    <form id="message-form">
      <div className="container">
        <div className={FormBundle.form__wrapper}>
          <h2 className={FormBundle.form__title}>My post</h2>
          <div className={FormBundle.form__field}>
            <input onChange={isChangeValue} ref={newMessage} placeholder="your message..." required className={FormBundle.form__input} ></input>
            <button onClick={(e) => addPostMessage(e)} className={FormBundle.form__button} type="submit">send</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;