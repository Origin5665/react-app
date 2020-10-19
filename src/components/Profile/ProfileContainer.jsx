import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { getUserProfileCreator } from '../../redux/thunk/getUserProfileCreator';
import { getCurrentUserStatusCreator } from '../../redux/thunk/getCurrentUserStatusCreator';
import { setNewUserStatusCreator } from '../../redux/thunk/setNewUserStatusCreator';
import { withRouter } from 'react-router-dom';
import { USER_ID } from '../../constant';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';


const mapState = (state) => ({
  data: state.profile.profileUser,
  status: state.profile.status,
  loginId: state.auth.userId,
  isAuth: state.auth.isAuth
});


class ProfileContainer extends React.Component {

  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.loginId
    this.props.getUserProfileCreator(userId);
    this.props.getCurrentUserStatusCreator(userId)
  };

  render = () => {

    return <Profile {...this.props} data={this.props.data} />
  };
};

const profileCompose = compose(connect(mapState, {
  getUserProfileCreator,
  getCurrentUserStatusCreator,
  setNewUserStatusCreator,
}),
  withRouter, withAuthRedirect)(ProfileContainer);

export default profileCompose;



