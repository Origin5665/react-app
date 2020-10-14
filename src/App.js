import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// Components =>

import Navigate from './components/Navigate/Navigate';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import EnterForm from './components/EnterForm/EnterForm';
import HeaderContainer from './components/Header/HeaderContainer';



const App = ({ state }) => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <HeaderContainer />
        <div className="wrapper-block">
          <Navigate />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <Dialogs state={state} />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
          <Route path="/login" render={() => <EnterForm />} />
        </div>
      </div>
    </BrowserRouter>
  )
};
export default App;
