import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, maxLengthRequared30, requaredField } from '../../../utils/validation';
import { ComponentInput } from '../../common/FormControls/FormControls';

import ProfilePost from './ProfilePost/ProfilePost';

const maxLength10 = maxLengthCreator(10)


const ProfileForm = ({ handleSubmit }) => {


  return (
    <form onSubmit={handleSubmit} >
      <Field component={ComponentInput} name={'message'} typeField="textarea" validate={[requaredField, maxLength10]} placeholder="ваше сообщение..."
      ></Field>

      <button
        type="submit">Отправить</button>

    </form>
  )
}

const ProfileFormContainer = reduxForm({ form: 'profileForm' })(ProfileForm)





const ProfileBlock = ({ data, addPost }) => {
  const onSubmit = (data) => {

    addPost(data.message)
  }

  const message = data.map((item, i) =>
    < ProfilePost key={i} message={item.message} like={item.count} />)


  return (
    <div >
      <div id="message-form">
        <div >
          <div >
            <h2>My post</h2>
            <ProfileFormContainer onSubmit={onSubmit} />
          </div>
        </div>
      </div>
      <div>
        {message}
      </div>
    </div>


  );
};




export default ProfileBlock;