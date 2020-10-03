import React from 'react';
import { connect } from "react-redux";
import Header from "./Header";
import { setUserAuth } from '../../redux/reducers/authReducer';
import Axios from 'axios';
import { userProfileAPI } from '../../API/userProfileAPI';

class HeaderContainer extends React.Component {

  componentDidMount = () => {
    userProfileAPI.getUserAuth()
      .then(res => {
        if (res.resultCode === 0) {
          const { login, id, email } = res.data;
          this.props.setUserAuth(login, id, email)
        }
      })
  };

  render = () => {
    return <Header {...this.props} />
  };
}

const mapState = (state) => ({
  data: state.auth.isAuth,
  login: state.auth.login
})

export default connect(mapState, { setUserAuth })(HeaderContainer)
