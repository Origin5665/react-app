import MessagerFormBlock from '../Messager/MessagerForm/MessagerFormReduxContainer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { actionCreatorPost, } from '../../redux/actions/actionDialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state) => {
   return {
      data: state.dialogs.message,
      isAuth: state.auth.isAuth
   }
};

const MessageFormBlockCompose = compose(
   connect(mapState, { actionCreatorPost }),
   withAuthRedirect
)(MessagerFormBlock)

export default MessageFormBlockCompose;    