import React from 'react';
import UserCard from '../UserCard/UserCard';
import Preloader from '../../common/Preloader/Preloader';
import Pagination from '../../common/paginator/pagination.jsx';
import InputSearch from '../../common/InputSearch/InputSearch';
import styles from './Users.module.css'


const Users = ({
   subscribeUser,
   unsubscribeUser,
   totalCount,
   pageSize,
   getCurrentPage,
   data,
   followingProgress,
   loader
}) => {

   const [filteredUsers, setFilteredUsers] = React.useState([]);

   const usersList = filteredUsers.map((user, index) =>
      <UserCard
         key={index}
         data={user}
         subscribeUser={subscribeUser}
         unsubscribeUser={unsubscribeUser}
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

         {loader ? <Preloader />
            : <ul className={styles.users__list} >
               {usersList}
            </ul>}

      </div>
   );
};

export default Users;