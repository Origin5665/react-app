import React from 'react';
import Profile from '../Profile/Profile';
import { connect } from 'react-redux';
import { getUserProfileCreator } from '../../redux/thunk/getUserProfileCreator';
import { withRouter } from 'react-router-dom';
import { USER_ID } from '../../constant';

class ProfileContainer extends React.Component {

  componentDidMount = () => {
    let userId = this.props.match.params.userId;
    if (!userId) userId = USER_ID
    this.props.getUserProfileCreator(userId)
  }

  render = () => {
    return <Profile {...this.props} data={this.props.data} />
  }
};

const mapState = (state) => ({
  data: state.profile.profileUser
})

const ProfileContainerRouter = withRouter(ProfileContainer)
export default connect(mapState, { getUserProfileCreator })(ProfileContainerRouter);