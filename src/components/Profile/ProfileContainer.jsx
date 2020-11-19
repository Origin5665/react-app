import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { getUserProfileCreator } from '../../redux/thunk/getUserProfileCreator';
import { getCurrentUserStatusCreator } from '../../redux/thunk/getCurrentUserStatusCreator';
import { setNewUserStatusCreator } from '../../redux/thunk/setNewUserStatusCreator';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
import { uploadImageProfile } from './../../redux/thunk/uploadImageProfile';

const mapState = (state) => ({
  data: state.profile.profileUser,
  status: state.profile.status,
  loginId: state.auth.userId,
  isAuth: state.auth.isAuth
});


class ProfileContainer extends React.Component {

  updateProfile = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.loginId;
    if (!userId) {
      this.props.history.push('/login')
    }
    this.props.getUserProfileCreator(userId);
    this.props.getCurrentUserStatusCreator(userId)
  }

  componentDidMount = () => {
    this.updateProfile()
  };
  componentDidUpdate = (prevProps) => {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile()
    }

  };

  render = () => {

    return <Profile
      owner={this.props.match.params.userId}
      uploadImageProfile={this.props.uploadImageProfile}
      {...this.props}
      data={this.props.data} />
  };
};

const profileCompose = compose(connect(mapState, {
  getUserProfileCreator,
  getCurrentUserStatusCreator,
  setNewUserStatusCreator,
  uploadImageProfile
}),
  withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



