import ProfileBlock from './ProfileBlock'
import { actionCreatorPost } from '../../../redux/actions/actionProfile';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
  return {
    post: state.profile.post,
    user: state.profile.profileUser

  }
}

const FormContainer = connect(mapStateToProps, { actionCreatorPost })(ProfileBlock)

export default FormContainer; 