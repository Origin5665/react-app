import React from 'react';
import UsersBundle from './Users.module.css';
import User from './User/User';
import PreLoader from '../common/PreLoader/Preloader';
import Pagination from '../common/paginator/pagination';


const Users = ({
   followingCreator,
   outFollowingCreator,
   totalCount,
   pageSize,
   currentPage,
   getCurrentPage,
   data,
   currentState,
   followingProgress,
   portionSize
}) => {

   const users = data.map((user, index) =>
      <User
         key={index}
         data={user}
         followingCreator={followingCreator}
         outFollowingCreator={outFollowingCreator}
         followingProgress={followingProgress}
      />);

   return (
      <div className={UsersBundle.users__wrapper}>
         <div className={UsersBundle.users__headerWrapper}>
            <h2 className={UsersBundle.users__title}>Участники проекта</h2>
            {currentState
               ? <PreLoader />
               : null}
         </div>

         <div className={UsersBundle.users__pagContainer}>
            <Pagination
               totalCount={totalCount}
               getCurrentPage={getCurrentPage}
               pageSize={pageSize}
               currentPage={currentPage}
               portionSize={portionSize}
            />
         </div>
         <ul className={UsersBundle.users__list}>
            {users}
         </ul>
      </div>
   )
}

export default Users;