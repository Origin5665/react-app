import ProfileBlock from './ProfileBlock'
import { addUserPost } from '../../../redux/reducers/profile';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    post: state.profile.post,
    user: state.profile.profile
  };
};

const FormContainer = connect(mapStateToProps, { addUserPost })(ProfileBlock)

export default FormContainer; 