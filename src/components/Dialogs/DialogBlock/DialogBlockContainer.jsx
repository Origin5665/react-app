
import DialogBlock from './DialogBlock';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/reducers/dialogsReducer';

import { connect } from 'react-redux';




const mapStateToProps = (state) => {

   return {
      data: state.dialogs.message
   }
}

const mapDispatchToProps = (dispatch) => {
   return {
      isChangeValue: (text) => { dispatch(actionCreatorMessage(text)) },
      sendMessage: () => { dispatch(actionCreatorPost()) }
   }

}

const DialogBlockContainer = connect(mapStateToProps, mapDispatchToProps)(DialogBlock)

export default DialogBlockContainer;