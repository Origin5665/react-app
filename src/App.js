import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import './App.css';
// BrowserRouter
// Route
// Props


// Components =>

import Header from './components/Header/Header';
import Navigate from './components/Navigate/Navigate';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Sittings from './components/Sittings/Sittings';



const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="wrapper-block">
          <Navigate />
          <div className="wrapper-content">
            <Route path="/profile" component={Profile} />
            <Route path="/dialogs" component={Dialogs} />
            <Route path="/music" component={Music} />
            <Route path="/news" component={News} />
            <Route path="/sittings" component={Sittings} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};






export default App;
