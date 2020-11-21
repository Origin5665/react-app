import React from 'react';
import Users from '../Users/Users/Users';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { getUsersSuperSelector, getPageSize, getTotalCount, getCurrentPage, getFollowingProgress } from '../../redux/selectors/users-selectors'
import { getUsersThunkCreator } from '../../redux/thunk/getUsersCreator';
import { outFollowingCreator, followingCreator } from '../../redux/thunk/followCreators';
import { subscribe, unsubscribe, setCurrentPage, setFollowingState } from '../../redux/actions/actionUsers';

const UsersContainer = (props) => {

   React.useEffect(() => {
      const { currentPage, pageSize } = props;
      props.getUsersThunkCreator(currentPage, pageSize)
   }, []);

   const getCurrentPage = (page) => {
      const { pageSize } = props;
      props.setCurrentPage(page)
      props.getUsersThunkCreator(page, pageSize)
   };

   return <Users
      followingCreator={props.followingCreator}
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      subscribe={props.subscribe}
      unsubscribe={props.unsubscribe}
      getCurrentPage={getCurrentPage}
      data={props.data}
      followingProgress={props.followingProgress}
      setFollowingState={props.setFollowingState}
      outFollowingCreator={props.outFollowingCreator}
   />
};

const mapState = (state) => {
   return {
      data: getUsersSuperSelector(state),
      totalCount: getTotalCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      followingProgress: getFollowingProgress(state),
      portionSize: state.users.portionSize
   }
};

const mapDispatch = {

   followingCreator,
   subscribe,
   unsubscribe,
   setCurrentPage,
   setFollowingState,
   getUsersThunkCreator,
   outFollowingCreator,
};

const usersContainerCompose = compose(connect(mapState, mapDispatch), withAuthRedirect)(UsersContainer)

export default usersContainerCompose;




