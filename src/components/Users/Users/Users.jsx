import React from 'react';
import UserCard from '../UserCard/UserCard';
import PreLoader from '../../common/PreLoader/Preloader';
import Pagination from '../../common/paginator/pagination.jsx';
import InputSearch from '../../common/InputSearch/InputSearch';
import styles from './Users.module.css'


const Users = ({
   followingCreator,
   outFollowingCreator,
   totalCount,
   pageSize,
   getCurrentPage,
   data,
   currentState,
   followingProgress,
}) => {

   const [filteredUsers, setFilteredUsers] = React.useState([]);

   const usersList = filteredUsers.map((user, index) =>
      <UserCard
         key={index}
         data={user}
         followingCreator={followingCreator}
         outFollowingCreator={outFollowingCreator}
         followingProgress={followingProgress}
      />);

   return (
      <div className="container">
         <div className={styles.users__header}>
            <h2 className={styles.users__title}>Участники проекта</h2>
            <InputSearch data={data} setFilteredUsers={setFilteredUsers} />
            <Pagination
               totalCount={totalCount}
               getCurrentPage={getCurrentPage}
               pageSize={pageSize}
            />
         </div>
         {currentState
            ? <PreLoader />
            : null}
         <ul className={styles.users__list} >
            {usersList}
         </ul>
      </div>
   );
};

export default Users;