import React from 'react';
import Profile from './Profile';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';

/* thunk's*/
import { getUserProfile } from '../../redux/reducers/profile';
import { userStatusUpdate } from '../../redux/reducers/profile';
import { getCurrentUserStatus } from '../../redux/reducers/profile';

// import { rootStateType } from '../../redux/reducers';
// import { profileType } from '../../redux/reducers/profile'



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
      data={this.props.data}
      userStatusUpdate={this.props.userStatusUpdate}
      owner={this.props.match.params.userId}
      status={this.props.status}
    />

  }


};

// type mapState = {
//   data: profileType
//   status: string
//   loginId: number | null
//   isAuth: boolean
// }
// type mapDispatch = {
//   getUserProfile: (userID: number) => void,
//   userStatusUpdate: (status: string) => void,
//   getCurrentUserStatus: (userID: number) => void
// }
// type propsType = mapState & mapDispatch

// type ownProps = {
//   userId: number
// }

const mapState = (state) => ({
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



const profileCompose = compose(connect(mapState, mapDispatch), withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



