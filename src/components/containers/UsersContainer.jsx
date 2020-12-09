import React from 'react';
import Users from '../Users/Users/Users';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import {
   setCurrentPage,
   setFollowingState,
   unsubscribeUser,
   subscribeUser,
   getUserProfilesCurrentPage
} from '../../redux/reducers/users';

import {
   getUsersSuperSelector,
   getPageSize,
   getTotalCount,
   getCurrentPage,
   getFollowingProgress
} from '../../redux/selectors/users-selectors';

const UsersContainer = (props) => {

   const [loader, setLoader] = React.useState(false);

   React.useEffect(() => {

      const fetchData = async () => {
         setLoader(true);
         const { currentPage, pageSize } = props;
         await props.getUserProfilesCurrentPage(currentPage, pageSize);
         setLoader(false);
      };
      fetchData();

   }, []);

   const getCurrentPage = (page) => {
      const { pageSize } = props;
      props.setCurrentPage(page)
      props.getUserProfilesCurrentPage(page, pageSize)
   };

   return <Users
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      currentPage={props.currentPage}
      getCurrentPage={getCurrentPage}
      data={props.data}
      followingProgress={props.followingProgress}
      subscribeUser={props.subscribeUser}
      unsubscribeUser={props.unsubscribeUser}
      loader={loader}
   />
};

const mapState = (state) => {
   return {
      data: getUsersSuperSelector(state),
      totalCount: getTotalCount(state),
      pageSize: getPageSize(state),
      currentPage: getCurrentPage(state),
      followingProgress: getFollowingProgress(state),

   };
};

const mapDispatch = {

   subscribeUser,
   unsubscribeUser,
   setCurrentPage,
   setFollowingState,
   getUserProfilesCurrentPage,//

};

const usersContainerCompose = compose(connect(mapState, mapDispatch), withAuthRedirect)(UsersContainer);

export default usersContainerCompose;




