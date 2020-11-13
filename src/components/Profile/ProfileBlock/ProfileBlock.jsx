import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, maxLengthRequared30, requaredField } from '../../../utils/validation';
import { ComponentInput } from '../../common/FormControls/FormControls';
import ProfileBlockBundle from './ProfileBlock.module.css';
import ProfilePost from './ProfilePost/ProfilePost';

const maxLength10 = maxLengthCreator(10)


const ProfileForm = ({ handleSubmit }) => {


  return (
    <form onSubmit={handleSubmit} className={ProfileBlockBundle.form__field}>
      <Field component={ComponentInput} className={ProfileBlockBundle.form__input} name={'message'} typeField="textarea" validate={[requaredField, maxLength10]} placeholder="ваше сообщение..."
      ></Field>

      <button className={ProfileBlockBundle.form__button}
        type="submit">Отправить</button>

    </form>
  )
}

const ProfileFormContainer = reduxForm({ form: 'profileForm' })(ProfileForm)





const ProfileBlock = ({ data, addPost }) => {
  const onSubmit = (data) => {
    console.log(data)
    addPost(data.message)
  }

  const message = data.map((item, i) =>
    < ProfilePost key={i} message={item.message} like={item.count} />)


  return (
    <div className={ProfileBlockBundle.wrapper}>
      <div id="message-form">
        <div className="container">
          <div className={ProfileBlockBundle.form__wrapper}>
            <h2 className={ProfileBlockBundle.form__title}>My post</h2>
            <ProfileFormContainer onSubmit={onSubmit} />
          </div>
        </div>
      </div>
      <div className={ProfileBlockBundle.postContainer} >
        {message}
      </div>
    </div>


  );
};




export default ProfileBlock;