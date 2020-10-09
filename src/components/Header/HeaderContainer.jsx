import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { getAuthUserProfileCreator } from '../../redux/thunk/getAuthUserProfileCreator';
class HeaderContainer extends React.Component {

  componentDidMount = () => {
    this.props.getAuthUserProfileCreator()
  };

  render = () => <Header {...this.props} />
}

const mapState = (state) => ({
  data: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapState, { getAuthUserProfileCreator })(HeaderContainer)
