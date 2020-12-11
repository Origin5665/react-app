import React from 'react';
import Profile from '../Profile/Profile';

import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

/* thunk's*/
import { getUserProfile } from '../../redux/reducers/profile';
import { userStatusUpdate } from '../../redux/reducers/profile';
import { getCurrentUserStatus } from '../../redux/reducers/profile';

import { rootStateType } from '../../redux/reducers';




class ProfileContainer extends React.Component<connectorProfileType & RouteComponentProps> {

  updateProfile = async () => {
    let userId: number | null = this.props.match.params.userId;
    if (!userId) userId = this.props.loginId;
    if (!userId) this.props.history.push('/login');
    await this.props.getUserProfile(userId);
    await this.props.getCurrentUserStatus(userId);
  }

  componentDidMount = () => {
    this.updateProfile()
  };
  componentDidUpdate = (prevProps: any) => {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.updateProfile()
    }
  };

  render = () => {

    return <Profile
      data={this.props.data}
      userStatusUpdate={this.props.userStatusUpdate}
      owner={this.props.match.params.userId}
      status={this.props.status}
    />

  }


};

const mapState = (state: rootStateType) => ({
  data: state.profile.profile,
  status: state.profile.status,
  loginId: state.auth.userId,
  isAuth: state.auth.isAuth
});

const mapDispatch = {
  getUserProfile,
  userStatusUpdate,
  getCurrentUserStatus
}

const connector = connect(mapState, mapDispatch)
type connectorProfileType = ConnectedProps<typeof connector>;
const profileCompose = compose(connector, withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



