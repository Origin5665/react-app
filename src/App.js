import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';

// Components =>
import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="wrapper-block">
          <Navigate />
          <Route exact path="/profile" render={() => <Profile />} />
          <Route path="/dialogs" render={() => <Dialogs />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  )
};
export default App;
