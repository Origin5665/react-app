import MessagerFormBlock from '../Messager/MessagerForm/MessagerFormReduxContainer';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { addUserMassage, } from '../../redux/reducers/messager';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state) => {
   return {
      data: state.messager.message,
      isAuth: state.auth.isAuth
   }
};

const MessageFormBlockCompose = compose(
   connect(mapState, { addUserMassage }),
   withAuthRedirect
)(MessagerFormBlock);

export default MessageFormBlockCompose;    