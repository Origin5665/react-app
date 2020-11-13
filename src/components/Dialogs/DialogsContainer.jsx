// import React from 'react';
// import DialogsBundle from '../Dialogs/Dialogs.module.css';
// import DialogsItem from './DialogsItem/DialogsItem';
// import DialogBlockContainer from './DialogBlock/DialogBlockContainer';
import { connect } from 'react-redux';
import Dialogs from './Dialogs'


const mapState = (state) => {
  console.log(state);
  return {
    data: state.user.dialog
  }
}




export default connect(mapState)(Dialogs);