import React from 'react';
import Pagination from '@material-ui/lab/Pagination';
import { useMediaQuery } from 'react-responsive';
import styles from './pagination.module.css';

const PaginationUI = ({ totalCount, pageSize, getCurrentPage }) => {


   const numberPages = Math.ceil(totalCount / pageSize);

   const desctopScreen = useMediaQuery({ minWidth: 1024 });
   const tableScreen = useMediaQuery({ minWidth: 414, maxWidth: 1024 });
   const mobileScreen = useMediaQuery({ minWidth: 320, maxWidth: 414 });

   const reSize = () => {
      let size = null;
      if (desctopScreen) return size = 'large'
      if (tableScreen) return size = 'medium'
      if (mobileScreen) return size = 'small'
   };

   return (
      <Pagination className={styles.wrapper}
         variant="outlined"
         color="primary"
         size={reSize()}
         count={numberPages}
         onChange={(event, page) => getCurrentPage(page)} />
   );

};

export default PaginationUI;
