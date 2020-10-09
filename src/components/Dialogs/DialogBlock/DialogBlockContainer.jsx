import DialogBlock from './DialogBlock';
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/actions/actionDialogs';
import { connect } from 'react-redux';

const mapState = (state) => {
   return {
      data: state.dialogs.message
   }
};

const DialogBlockContainer = connect(mapState, { actionCreatorMessage, actionCreatorPost })(DialogBlock)
export default DialogBlockContainer;