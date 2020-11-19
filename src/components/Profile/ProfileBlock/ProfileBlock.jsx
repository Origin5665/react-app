import React, { Fragment } from 'react';
import { reduxForm, reset } from 'redux-form';

import ProfileForm from './../ProfileForm/ProfileForm';
import ProfilePost from './ProfilePost/ProfilePost';





const ProfileBlock = (props) => {
  console.log(props)

  const onSubmit = (data) => {

    props.actionCreatorPost(data.message)
  }

  const postList = props.post.map((item, i) =>

    < ProfilePost key={i} image={props.user ? props.user.photos.small : null} date={item.date} message={item.message} like={item.count} />)


  return (
    <Fragment>
      <ProfileFormContainer onSubmit={onSubmit} />
      <div>
        {postList}
      </div>

    </Fragment>


  );
};


const afterSubmit = (result, dispatch) =>
  dispatch(reset('profileForm'));


const ProfileFormContainer = reduxForm({ form: 'profileForm', onSubmitSuccess: afterSubmit })(ProfileForm)



export default ProfileBlock;