import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { logoutCreator } from '../../redux/thunk/logoutCreator';
class HeaderContainer extends React.Component {

  render = () => <Header {...this.props} />
}

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapState, { logoutCreator })(HeaderContainer)
