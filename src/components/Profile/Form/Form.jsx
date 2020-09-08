import React from 'react';
import FormBundle from '../Form/Form.module.css';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/profileReducer';


const Form = (props) => {

  const newMessage = React.createRef();

  const addPostMessage = (e) => {
    e.preventDefault();
    props.dispatch(actionCreatorPost());
    newMessage.current.value = ''
  }

  const isChangeValue = (e) => {

    const text = newMessage.current.value;
    const action = actionCreatorMessage(text)
    props.dispatch(action);

  }

  return (
    <form id="message-form">
      <div className="container">
        <div className={FormBundle.form__wrapper}>
          <h2 className={FormBundle.form__title}>My post</h2>
          <div className={FormBundle.form__field}>
            <input onChange={isChangeValue} ref={newMessage} placeholder="ваше сообщение..."
              required className={FormBundle.form__input} ></input>
            <button onClick={(e) => addPostMessage(e)} className={FormBundle.form__button}
              type="submit">отправить</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;