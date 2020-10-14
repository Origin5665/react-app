import ProfileBlock from './ProfileBlock'
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/actions/actionProfile';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {

    addPost: text => { dispatch(actionCreatorPost(text)) }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.profile.post
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBlock)

export default FormContainer;