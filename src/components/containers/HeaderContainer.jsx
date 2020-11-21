import React from 'react';
import Header from "../Header/Header";

import { connect } from "react-redux";
import { logoutCreator } from '../../redux/thunk/logoutCreator';
import { getUserProfileCreator } from '../../redux/thunk/getUserProfileCreator';
class NavbarContainer extends React.Component {

  render = () => <Header {...this.props} />
};

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  data: state.profile.profileUser,
  loginId: state.auth.userId,
});

export default connect(mapState,
  {
    logoutCreator,
    getUserProfileCreator
  })(NavbarContainer);
