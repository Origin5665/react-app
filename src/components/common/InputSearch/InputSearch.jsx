import React from 'react'
import styles from './InputSearch.module.css';

const InputSearch = ({ data, setFilteredUsers }) => {

   const [search, setSearch] = React.useState('');

   React.useEffect(() => {
      return setFilteredUsers(data.filter(user =>
         user.name.toLowerCase().includes(search.toLowerCase())))
   }, [search, data])

   return (
      <React.Fragment>
         <input className={styles.users__searchInput}
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder={'Поиск участников'} />
      </React.Fragment>
   );
};

export default InputSearch;
