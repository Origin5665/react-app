import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { outFollowingCreator, followingCreator } from '../../redux/thunk/followCreators';
import { getUsersThunkCreator } from '../../redux/thunk/getUsersCreator';
import { subscribe, unsubscribe, setCurrentPage, setFollowingState } from '../../redux/actions/actionUsers';

import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';
class UsersContainer extends React.Component {

   componentDidMount = () => {
      this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
   };

   getCurrentPage = (page) => {
      this.props.setCurrentPage(page)
      this.props.getUsersThunkCreator(page, this.props.pageSize)
   };

   render = () => <Users

      followingCreator={this.props.followingCreator}
      totalCount={this.props.totalCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      subscribe={this.props.subscribe}
      unsubscribe={this.props.unsubscribe}
      getCurrentPage={this.getCurrentPage}
      data={this.props.data}
      currentState={this.props.currentState}
      followingProgress={this.props.followingProgress}
      setFollowingState={this.props.setFollowingState}
      outFollowingCreator={this.props.outFollowingCreator}

   />
}

const mapState = (state) => {
   return {
      data: state.users.users,
      totalCount: state.users.totalCount,
      pageSize: state.users.pageSize,
      currentPage: state.users.currentPage,
      currentState: state.users.currentState,
      followingProgress: state.users.followingProgress
   }
};

const usersContainerCompose = compose(connect(mapState, {
   followingCreator,
   subscribe,
   unsubscribe,
   setCurrentPage,
   setFollowingState,
   getUsersThunkCreator,
   outFollowingCreator

}), withAuthRedirect)(UsersContainer)

export default usersContainerCompose;
// export default connect(mapState, {
//    followingCreator,
//    subscribe,
//    unsubscribe,
//    setCurrentPage,
//    setFollowingState,
//    getUsersThunkCreator,
//    outFollowingCreator

// })(UsersContainer);



