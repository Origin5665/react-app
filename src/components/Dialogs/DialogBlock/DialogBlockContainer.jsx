import DialogBlock from './DialogBlock';
import { withAuthRedirect } from '../../../HOC/withAuthRedirect';
import { actionCreatorPost, } from '../../../redux/actions/actionDialogs';
import { connect } from 'react-redux';
import { compose } from 'redux';

const mapState = (state) => {
   return {
      data: state.dialogs.message,
      isAuth: state.auth.isAuth
   }
};

const dialogBlockCompose = compose(
   connect(mapState, { actionCreatorPost }),
   withAuthRedirect
)(DialogBlock)

// const AuthRedirectComponent = withAuthRedirect(DialogBlock)
// const DialogBlockContainer = connect(mapState, { actionCreatorMessage, actionCreatorPost })(AuthRedirectComponent)
export default dialogBlockCompose;    