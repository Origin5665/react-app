import App from '../../App';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { appInitCreator } from '../../redux/reducers/appReducer';
import Preloader from '../common/Preloader/Preloader';

import { withRouter } from 'react-router-dom';

class AppContainer extends React.Component {

   componentDidMount = () => {
      this.props.appInitCreator(this.props.id);
   };

   render = () => this.props.initialized ? <App /> : <Preloader />



}
const mapState = (state) => {
   return {
      initialized: state.app.initialized,
      id: state.auth.userId
   }
}

export default compose(
   withRouter,
   connect(mapState, { appInitCreator }))
   (AppContainer);
