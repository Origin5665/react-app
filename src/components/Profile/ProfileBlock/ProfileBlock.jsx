import React from 'react';
import ProfileBlockBundle from './ProfileBlock.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfileBlock = ({ addPost, inputText, data }) => {
  console.log(data)
  const newMessage = React.createRef();

  const message = data.map((item, i) =>
    < ProfilePost key={i} message={item.message} like={item.count} />)

  const addPostMessage = (e) => {
    e.preventDefault()
    addPost()
    newMessage.current.value = ''
  }

  const isChangeValue = () => {

    const text = newMessage.current.value;
    inputText(text);
  }

  return (
    <div className={ProfileBlockBundle.wrapper}>
      <form id="message-form">
        <div className="container">
          <div className={ProfileBlockBundle.form__wrapper}>
            <h2 className={ProfileBlockBundle.form__title}>My post</h2>
            <div className={ProfileBlockBundle.form__field}>
              <input onChange={isChangeValue} ref={newMessage} placeholder="ваше сообщение..."
                required className={ProfileBlockBundle.form__input} ></input>
              <button onClick={(e) => addPostMessage(e)} className={ProfileBlockBundle.form__button}
                type="submit">отправить</button>
            </div>
          </div>
        </div>
      </form>
      <div className={ProfileBlockBundle.postContainer} >
        {message}
      </div>
    </div>


  );
};

export default ProfileBlock;