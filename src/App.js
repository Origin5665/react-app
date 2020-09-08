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


const App = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="wrapper-block">
          <Navigate />
          <div className="wrapper-content">
            <Route exact path="/profile" render={() => <Profile profile={props.state.profile} dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs user={props.state.user} dialogs={props.state.dialogs.message} dispatch={props.dispatch} />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};






export default App;
