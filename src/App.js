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

// Histiry Api
// Route
// Props
// рендер массивов 
// render component
// Чистые функции 
// React ref
// FLUX

const App = (props) => {
  console.log(props)
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="wrapper-block">
          <Navigate />

          <div className="wrapper-content">
            <Route exact path="/profile" render={() => <Profile message={props.state.post} postText={props.state.postText} dispatch={props.dispatch} />} />
            <Route path="/dialogs" render={() => <Dialogs dialogs={props.state.dialogs} />} />
            <Route path="/music" render={() => <Music />} />
            <Route path="/news" render={() => <News />} />
            <Route path="/settings" render={() => <Settings />} />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};






export default App;
