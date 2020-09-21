import React from 'react';
import FormBundle from '../Form/Form.module.css';



const Form = (props) => {

  const newMessage = React.createRef();

  const addPostMessage = (e) => {
    e.preventDefault()
    props.addPost()
    newMessage.current.value = ''
  }

  const isChangeValue = () => {

    const text = newMessage.current.value;
    props.inputText(text)

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