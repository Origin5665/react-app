import React, { lazy } from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { appInitCreator } from './redux/reducers/appReducer';
import Navigate from './components/Navigate/Navigate';
import ProfileContainer from './components/Profile/ProfileContainer';
// import Dialogs from './components/Dialogs/Dialogs';
// import UsersContainer from './components/Users/UsersContainer';
import Settings from './components/Settings/Settings'
import EnterForm from './components/EnterForm/EnterForm';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PreLoader from './components/common/PreLoader/Preloader';
import { withSuspense } from './HOC/withSuspense';
const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

  componentDidMount = () => {
    this.props.appInitCreator()
  };

  render = () => {
    if (!this.props.initialized) {
      return <PreLoader />
    }

    return (
      <div className="wrapper">
        <HeaderContainer />
        <div className="wrapper-block">
          {/* <Navigate /> */}
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />

          <Route path="/users" render={withSuspense(UsersContainer)} />
          <Route path="/dialogs" render={withSuspense(DialogsContainer)} />

          {/* <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} /> */}
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <EnterForm />} />
        </div>
      </div>
    )
  }
};

const mapState = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapState, { appInitCreator }))
  (App);
