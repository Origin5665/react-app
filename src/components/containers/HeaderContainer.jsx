import React from 'react';
import Header from "../Header/Header";
import { compose } from 'redux';
import { connect } from "react-redux";
import { userLogout } from '../../redux/reducers/auth';
import { withRouter } from 'react-router-dom';
class HeaderContainer extends React.Component {

  render = () => <Header {...this.props} />
};

const mapState = (state) => ({
  isAuth: state.auth.isAuth,
  loginId: state.auth.userId,
});

export default compose(connect(mapState,
  { userLogout }), withRouter)(HeaderContainer);
