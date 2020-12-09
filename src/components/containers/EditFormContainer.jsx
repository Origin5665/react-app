
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { userProfileUpdate } from '../../redux/reducers/profile';
import EditForm from '../Settings/SettingsForm/SettingsForm';

const mapState = (state) => {
   return {
      profileData: state.profile.profile
   }
}

export default compose(connect(mapState, { userProfileUpdate }), withAuthRedirect)(EditForm)