import React from 'react';
import Header from "./Header";
import { connect } from "react-redux";
import { getUserProfileCreator } from '../../redux/reducers/authReducer'

class HeaderContainer extends React.Component {

  componentDidMount = () => {
    this.props.getUserProfileCreator()
  };

  render = () => {
    return <Header {...this.props} />
  };
}

const mapState = (state) => ({
  data: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapState, { getUserProfileCreator })(HeaderContainer)
