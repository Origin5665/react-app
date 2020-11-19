import React, { Fragment, lazy } from 'react';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import './App.css';
import { appInitCreator } from './redux/reducers/appReducer';
import Navigate from './components/Navigate/Navigate';
import ProfileContainer from './components/Profile/ProfileContainer';
import { ProviderApp } from './ContextStore'
import Settings from './components/Settings/Settings'
import EnterForm from './components/EnterForm/EnterForm';
import NavbarContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PreLoader from './components/common/PreLoader/Preloader';
import { withSuspense } from './HOC/withSuspense';

const DialogsContainer = lazy(() => import('./components/Dialogs/DialogsContainer'))
const UsersContainer = lazy(() => import('./components/Users/UsersContainer'))

class App extends React.Component {

  componentDidMount = () => {
    this.props.appInitCreator(this.props.id)
  };

  render = () => {
    if (!this.props.initialized) {
      return <PreLoader />
    }

    return (
      <ProviderApp>
        <Fragment>
          <NavbarContainer />

          <Navigate />
          <Switch>
            <Route path='/' exact><Redirect to='/profile' /></Route>
            <Route path="/profile/:userId?" component={ProfileContainer} />
            <Route path="/users" render={withSuspense(UsersContainer)} />
            <Route path="/dialogs" render={withSuspense(DialogsContainer)} />
            <Route path="/settings" render={() => <Settings />} />
            <Route path="/login" component={EnterForm} />
            <Route render={() => <div>404 not found</div>} />
          </Switch >



        </Fragment>
      </ProviderApp>
    )
  }
};

const mapState = (state) => {
  return {
    initialized: state.app.initialized,
    id: state.auth.userId
  }
}

export default compose(
  withRouter,
  connect(mapState, { appInitCreator }))
  (App);
