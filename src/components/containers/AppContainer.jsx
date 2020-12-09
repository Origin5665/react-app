import App from '../../App';
import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { initialApp } from '../../redux/reducers/init';
import Preloader from '../common/Preloader/Preloader';

import { withRouter } from 'react-router-dom';

class AppContainer extends React.Component {

   componentDidMount = () => {
      this.props.initialApp(this.props.id);
   };

   render = () => this.props.initialized ? <App /> : <Preloader />



}
const mapState = (state) => {
   return {
      initialized: state.init.initialized,
      id: state.auth.userId
   }
}

export default compose(
   withRouter,
   connect(mapState, { initialApp }))
   (AppContainer);
