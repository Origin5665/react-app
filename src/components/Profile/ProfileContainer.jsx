import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from '../Profile/Profile';
import { setUserProfile } from '../../redux/reducers/profileReducer';
import { withRouter } from 'react-router-dom';

const mapState = (state) => ({
  data: state.profile.profileUser
})

class ProfileContainer extends React.Component {


  componentDidMount = () => {

    let userId = this.props.match.params.userId;

    if (!userId) {
      console.log(userId)
      userId = 11622
    }
    Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
      .then(res => {
        this.props.setUserProfile(res.data)
      })
  }

  render = () => {
    console.log(this.props)
    return <Profile {...this.props} data={this.props.data} />



  }


};


const ProfileContainerRouter = withRouter(ProfileContainer)
export default connect(mapState, { setUserProfile })(ProfileContainerRouter);