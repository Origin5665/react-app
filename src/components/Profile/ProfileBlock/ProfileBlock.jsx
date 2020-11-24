import React from 'react';
import { reduxForm, reset } from 'redux-form';
import ProfileForm from './../ProfileForm/ProfileForm';
import ProfilePost from './ProfilePost/ProfilePost';

const ProfileBlock = ({ actionCreatorPost, post, user }) => {

  const onSubmit = React.useCallback(
    (data) => {
      actionCreatorPost(data.message)
    },
    [actionCreatorPost],
  );

  const postList = post.map((item, i) =>

    < ProfilePost
      key={i}
      image={user ? user.photos.small : null}
      date={item.date}
      message={item.message}
      like={item.count} />)

  return (
    <React.Fragment>
      <ProfileFormContainer onSubmit={onSubmit} />
      <div>
        {postList}
      </div>
    </React.Fragment>
  );
};

const afterSubmit = (result, dispatch) =>
  dispatch(reset('profile-form'));

const ProfileFormContainer = reduxForm({ form: 'profile-form', onSubmitSuccess: afterSubmit })(ProfileForm)

export default ProfileBlock;