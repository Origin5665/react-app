import React from 'react';
import Navbar from "./Header";
import { getUserProfileCreator } from '../../redux/thunk/getUserProfileCreator';
import { connect } from "react-redux";
import { logoutCreator } from '../../redux/thunk/logoutCreator';
class NavbarContainer extends React.Component {

  render = () => <Navbar {...this.props} />
}

const mapState = (state) => ({
  isAuth: state.auth.isAuth,

  data: state.profile.profileUser,
  loginId: state.auth.userId,
})

export default connect(mapState,
  {
    logoutCreator,
    getUserProfileCreator
  })(NavbarContainer)
