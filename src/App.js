import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

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

import Music from './components/Music/Music';

// Lazy Components:
const MessagerContainer = React.lazy(() => import('./components/containers/MessagerContainer'));
const UsersContainer = React.lazy(() => import('./components/containers/UsersContainer'));


const App = () => {

   return (
      <ProviderApp>
         <React.Fragment>
            <HeaderContainer />
            <Navigate />
            <Switch>
               <Route path='/' exact><Redirect to='/profile' /></Route>
               <Route path="/profile/:userId?" component={ProfileContainer} />
               <Route path="/users" component={withSuspense(UsersContainer)} />
               <Route path="/dialogs" component={withSuspense(MessagerContainer)} />
               <Route path="/settings" component={Settings} />
               <Route path="/login" component={EnterForm} />
               <Route path="/login" component={Music} />
               <Route render={() => <div className="container">404 not found</div>} />
            </Switch >
         </React.Fragment>
      </ProviderApp>
   )
};

export default App;
