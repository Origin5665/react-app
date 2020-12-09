import React from 'react';
import Profile from '../Profile/Profile';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

/* thunk's*/
import { getUserProfile } from '../../redux/reducers/profile';
import { userStatusUpdate } from '../../redux/reducers/profile';
import { getCurrentUserStatus } from '../../redux/reducers/profile';
import { userPhotoUpdate } from '../../redux/reducers/profile';


const mapState = (state) => ({
  data: state.profile.profile,
  status: state.profile.status,
  loginId: state.auth.userId,
  isAuth: state.auth.isAuth
});

class ProfileContainer extends React.Component {

  updateProfile = async () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.loginId;
    if (!userId) this.props.history.push('/login');
    await this.props.getUserProfile(userId);
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
      userStatusUpdate={userStatusUpdate}
      owner={this.props.match.params.userId}
      userPhotoUpdate={this.props.userPhotoUpdate}
      {...this.props}
      data={this.props.data} />
  };
};

const profileCompose = compose(connect(mapState, {
  getUserProfile,
  userStatusUpdate,
  userPhotoUpdate,
  getCurrentUserStatus
}), withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



