import React from 'react';
import UsersBundle from './Users.module.css';
import User from './User/User';

const Users = ({
   totalCount,
   pageSize,
   currentPage,
   subscribe,
   unsubscribe,
   getCurrentPage,
   data }) => {

   //Рассчет количества страниц: 

   const numberPages = Math.ceil(totalCount / pageSize);

   // Добавляем элементы в массив для вывода кол-ва страниц:

   const arrayPages = [];
   for (let page = 1; page <= 20; page++) {
      arrayPages.push(page)
   };

   // Вывод пользователей:

   const users = data.map((user, index) => <User key={index} data={user}
      subscribe={subscribe} unsubscribe={unsubscribe} />);

   // Вывод страниц пагинации:

   const pages = arrayPages.map((i, j) =>
      <li onClick={() =>
         getCurrentPage(i)} key={j}
         className={currentPage === i ?
            UsersBundle.users__page + ' ' + UsersBundle.users__page_active :
            UsersBundle.users__page}>{i}</li>)

   return (
      <div className={UsersBundle.users__wrapper}>
         <div className={UsersBundle.users__pagContainer}>
            {pages}
         </div>
         <ul className={UsersBundle.users__list}>
            {users}
         </ul>
      </div>
   )
}

export default Users;