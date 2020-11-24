import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

import { getProfile } from '../../redux/thunk/getProfile';
import { getCurrentUserStatus } from '../../redux/thunk/getCurrentUserStatus';
import { setNewUserStatus } from '../../redux/thunk/setNewUserStatus';
import { uploadImageProfile } from './../../redux/thunk/uploadImageProfile';

const mapState = (state) => ({
  data: state.profile.profileUser,
  status: state.profile.status,
  loginId: state.auth.userId,
  isAuth: state.auth.isAuth
});

class ProfileContainer extends React.Component {

  updateProfile = async () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.loginId;
    if (!userId) this.props.history.push('/login');
    await this.props.getProfile(userId);
    await this.props.getCurrentUserStatus(userId);
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
  getProfile,
  getCurrentUserStatus,
  setNewUserStatus,
  uploadImageProfile
}),
  withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



