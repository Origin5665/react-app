import React, { useState } from 'react';
import style from './pagination.module.css';
import { Icon } from 'react-icons-kit'
import { arrowRightThick } from 'react-icons-kit/typicons/arrowRightThick'
import { arrowLeftThick } from 'react-icons-kit/typicons/arrowLeftThick'
import { Button } from '@material-ui/core';

import Pagination from '@material-ui/lab/Pagination';
import { PaginationItem } from '@material-ui/lab';

const Pagin = ({ totalCount, pageSize, currentPage, getCurrentPage, portionSize }) => {

   const numberPages = Math.ceil(totalCount / pageSize);
   const arrayPages = [];

   for (let page = 1; page <= numberPages; page++) {
      arrayPages.push(page)
   };

   const portionCount = Math.ceil(numberPages / portionSize);
   const [portionNumber, setPortionNumber] = useState(Math.ceil(currentPage / portionSize));
   const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
   const rightPortionNumber = portionNumber * portionSize;

   const pages = arrayPages.filter(item => item >= leftPortionNumber && item <= rightPortionNumber).map((i, j) =>
      <PaginationItem onClick={() =>
         getCurrentPage(i)} key={j}
         className={currentPage === i
            ? style.users__page + ' ' + style.users__page_active
            : style.users__page}>{i}</PaginationItem>)

   return (
      <div className={style.wrapper}>
         <Pagination count={numberPages} onChange={(event, page) => getCurrentPage(page)}>

         </Pagination>
         {/* {portionNumber > 1
            ? <Button Button
               color={"primary"}
               onClick={() => setPortionNumber(portionNumber - 1)}>
               <Icon size={32} icon={arrowLeftThick} />
            </Button>
            : null}
         { pages}
         {
            portionNumber >= portionCount
               ? null
               : <Button
                  color={"primary"}
                  onClick={() => setPortionNumber(portionNumber + 1)}>
                  <Icon size={32} icon={arrowRightThick} />
               </Button>
         } */}

      </div >
   )

}


// Вынести стили в отдельный модуль

export default Pagin;
