import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import './App.css';
import { appInitCreator } from './redux/reducers/appReducer';


import Navigate from './components/Navigate/Navigate';
import ProfileContainer from './components/Profile/ProfileContainer';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import EnterForm from './components/EnterForm/EnterForm';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PreLoader from './components/common/PreLoader/Preloader';



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
          <Navigate />
          <Route path="/profile/:userId?" render={() => <ProfileContainer />} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/dialogs" render={() => <Dialogs state={this.props.state} />} />
          {/* <Route path="/music" render={() => <Music />} />
          <Route path="/news" render={() => <News />} />
          <Route path="/settings" render={() => <Settings />} /> */}
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
