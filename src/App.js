import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Redirect, Switch, Route, withRouter } from 'react-router-dom';
import { appInitCreator } from './redux/reducers/appReducer';
import { withSuspense } from './HOC/withSuspense';
import { ProviderApp } from './ContextStore';

// Style:
import './App.css';

// Components: 
import Navigate from './components/Navigate/Navigate';
import Settings from './components/Settings/Settings';
import EnterForm from './components/EnterForm/EnterForm';
import HeaderContainer from './components/containers/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import PreLoader from './components/common/PreLoader/Preloader';

// Lazy Components:
const MessagerContainer = React.lazy(() => import('./components/containers/MessagerContainer'));
const UsersContainer = React.lazy(() => import('./components/containers/UsersContainer'));

class App extends React.Component {

   componentDidMount = () => {
      this.props.appInitCreator(this.props.id)
   };

   render = () => {
      if (!this.props.initialized) {
         return <PreLoader />
      };

      return (
         <ProviderApp>
            <React.Fragment>
               <HeaderContainer />
               <Navigate />
               <Switch>
                  <Route path='/' exact><Redirect to='/profile' /></Route>
                  <Route path="/profile/:userId?" component={ProfileContainer} />
                  <Route path="/users" render={withSuspense(UsersContainer)} />
                  <Route path="/dialogs" render={withSuspense(MessagerContainer)} />
                  <Route path="/settings" render={() => <Settings />} />
                  <Route path="/login" component={EnterForm} />
                  <Route render={() => <div>404 not found</div>} />
               </Switch >
            </React.Fragment>
         </ProviderApp>
      )
   };
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
