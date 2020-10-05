import React from 'react';
import Users from './Users';
import { userProfileAPI } from '../../API/userProfileAPI';
import { connect } from 'react-redux';
import {

   subscribe,
   unsubscribe,
   setUsers,
   setTotalCount,
   setPageSize,
   setCurrentPage,
   setCurrentState,
   setFollowingState

} from '../../redux/reducers/usersReducer';

const mapState = (state) => {

   return {
      data: state.users.users,
      totalCount: state.users.totalCount,
      pageSize: state.users.pageSize,
      currentPage: state.users.currentPage,
      currentState: state.users.currentState,
      followingProgress: state.users.followingProgress
   }
}
class UsersContainer extends React.Component {
   constructor(props) {
      super();
      this.props = props;
      console.log(this.props)

   };

   componentDidMount = () => {
      userProfileAPI.getUsers(this.props.currentPage, this.props.pageSize)
         .then(res => {
            if (this.props.data.length === 0) {
               this.props.setUsers(res.items);
               this.props.setTotalCount(res.totalCount);
            }
         })
   };

   getCurrentPage = (page) => {
      this.props.setCurrentState(true)
      this.props.setCurrentPage(page)
      userProfileAPI.getUsers(page, this.props.pageSize)
         .then(res => {
            this.props.setUsers(res.items);
            this.props.setCurrentState(false)
         })
   };

   render = () => <Users

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


   />
}

export default connect(mapState, {

   subscribe,
   unsubscribe,
   setUsers,
   setTotalCount,
   setPageSize,
   setCurrentPage,
   setCurrentState,
   setFollowingState

})(UsersContainer);



