import React from 'react';
import Users from '../Users/Users/Users';
import { connect, ConnectedProps } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../HOC/withAuthRedirect';
import { rootStateType } from '../../redux/reducers';
import {
   setCurrentPage,
   unsubscribeUser,
   subscribeUser,
   getUserProfilesCurrentPage,

} from '../../redux/reducers/users';

import {
   getUsersSelector,
   getPageSize,
   getTotalCount,
   getCurrentPage,
   getFollowingProgress
} from '../../redux/selectors/users-selectors';


const UsersContainer: React.FC<connectorType> = (props) => {

   const [loader, setLoader] = React.useState(false);
   const { currentPage, pageSize } = props;


   React.useEffect(() => {

      const fetchData = async () => {
         setLoader(true);
         await props.getUserProfilesCurrentPage(currentPage, pageSize);
         setLoader(false);
      };

      fetchData();

   }, [currentPage]);

   const getCurrentPage = (page: number) => {

      props.setCurrentPage(page)
      props.getUserProfilesCurrentPage(page, pageSize)
   };

   return <Users
      totalCount={props.totalCount}
      pageSize={props.pageSize}
      loader={loader}
      data={props.data}
      followingProgress={props.followingProgress}
      getCurrentPage={getCurrentPage}
      subscribeUser={props.subscribeUser}
      unsubscribeUser={props.unsubscribeUser}
   />
};

const mapState = (state: rootStateType) => {
   return {
      data: getUsersSelector(state),
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
   getUserProfilesCurrentPage
};

const connector = connect(mapState, mapDispatch)
type connectorType = ConnectedProps<typeof connector>

const usersContainerCompose = compose(connector, withAuthRedirect)(UsersContainer);

export default usersContainerCompose;




