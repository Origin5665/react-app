

import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { updateProfile } from '../../redux/thunk/updateProfile';
import EditForm from '../Settings/SettingsForm/SettingsForm';





const mapState = (state) => {
   return {
      profileData: state.profile.profileUser
   }
}

export default compose(connect(mapState, { updateProfile }), withAuthRedirect)(EditForm)