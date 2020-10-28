import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { outFollowingCreator, followingCreator } from '../../redux/thunk/followCreators';
import { getUsersThunkCreator } from '../../redux/thunk/getUsersCreator';
import { subscribe, unsubscribe, setCurrentPage, setFollowingState } from '../../redux/actions/actionUsers';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { compose } from 'redux';

//Selectors => 
import {
   getUsersSuperSelector,
   getPageSize,
   getTotalCount,
   getCurrentPage,
   getCurrentState,
   getFollowingProgress
} from '../../redux/selectors/users-selectors'



class UsersContainer extends React.Component {

   componentDidMount = () => {
      const { currentPage, pageSize } = this.props
      this.props.getUsersThunkCreator(currentPage, pageSize)
   };

   getCurrentPage = (page) => {
      const { pageSize } = this.props;
      this.props.setCurrentPage(page)
      this.props.getUsersThunkCreator(page, pageSize)
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
      portionSize={this.props.portionSize}

   />
}

const mapState = (state) => {
   return {
      data: getUsersSuperSelector(state),
      totalCount: getTotalCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      currentState: getCurrentState(state),
      followingProgress: getFollowingProgress(state),
      portionSize: state.users.portionSize

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




