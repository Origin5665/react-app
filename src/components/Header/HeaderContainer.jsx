import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserProfileCreator } from '../../redux/thunk/getAuthUserProfileCreator';
import { logoutCreator } from '../../redux/thunk/logoutCreator';
class HeaderContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAuthUserProfileCreator()
  };

  render = () => <Header {...this.props} />
}

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapState, { getAuthUserProfileCreator, logoutCreator })(HeaderContainer)
