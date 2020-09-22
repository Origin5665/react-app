import ProfileBlock from './ProfileBlock'
import { actionCreatorPost, actionCreatorMessage } from '../../../redux/reducers/profileReducer';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => {
  return {
    inputText: (text) => { dispatch(actionCreatorMessage(text)) },
    addPost: () => { dispatch(actionCreatorPost()) }
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.profile.post
  }
}

const FormContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileBlock)

export default FormContainer;