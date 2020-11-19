import React, { useState, useEffect } from 'react';
import UserCard from '../UserCard/UserCard';
import PreLoader from '../../common/PreLoader/Preloader';
import Pagination from '../../common/paginator/pagination';
import styles from './Users.module.css'

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

   const [search, setSearch] = useState('');
   const [filteredUsers, setFilteredUsers] = useState([])

   useEffect(() => {
      return setFilteredUsers(data.filter(user => user.name.toLowerCase().includes(search.toLowerCase())))
   }, [search, data])





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
         <div >
            <h2 >Участники проекта</h2>
            {currentState
               ? <PreLoader />
               : null}
         </div>
         {/* Input Search */}
         <input value={search} onChange={e => setSearch(e.target.value)} placeholder={'Поиск'} />
         <div>
            <Pagination
               totalCount={totalCount}
               getCurrentPage={getCurrentPage}
               pageSize={pageSize}
               currentPage={currentPage}
               portionSize={portionSize}
            />
         </div>
         <ul className={styles.users__list} >
            {usersList}
         </ul>
      </div>
   )
}

export default Users;