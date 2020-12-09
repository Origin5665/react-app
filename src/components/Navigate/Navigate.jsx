import React from 'react';
import styles from '../Navigate/Navigate.module.css';
import { NavLink } from 'react-router-dom';
import { user } from 'react-icons-kit/icomoon/user'
import { ic_supervisor_account } from 'react-icons-kit/md/ic_supervisor_account'
import { ic_chat } from 'react-icons-kit/md/ic_chat'
import { ic_wc } from 'react-icons-kit/md/ic_wc'
import { ic_music_note } from 'react-icons-kit/md/ic_music_note'
import Icon from 'react-icons-kit';
import { ContextStore } from '../../ContextStore';


const Navigate = () => {

  const { sideBarState } = React.useContext(ContextStore)

  return (
    <nav className={sideBarState ? styles.navigate + ' ' + styles.navigate_active : styles.navigate}>
      <ul className={sideBarState
        ? styles.navigate__list + ' ' + styles.navigate__list_active
        : styles.navigate__list}>

        <NavLink className={styles.navigate__link} activeClassName={styles.navigate__link_active}
          to="/profile">
          <Icon icon={user} size={32} />
          <li>Профиль</li>
        </NavLink>
        <NavLink className={styles.navigate__link} activeClassName={styles.navigate__link_active}
          to="/users">
          <Icon icon={ic_supervisor_account} size={32} />
          <li>Пользователи</li>
        </NavLink>
        <NavLink className={styles.navigate__link} activeClassName={styles.navigate__link_active}
          to="/dialogs">
          <Icon icon={ic_chat} size={32} />
          <li>Диалоги</li>
        </NavLink>
        <NavLink className={styles.navigate__link} activeClassName={styles.navigate__link_active}
          to="/music">
          <Icon icon={ic_music_note} size={32} />
          <li>Музыка</li>
        </NavLink>
        <NavLink className={styles.navigate__link} activeClassName={styles.navigate__link_active}
          to="/friends">
          <Icon icon={ic_wc} size={32} />
          <li>Друзья</li>
        </NavLink>
      </ul>
    </nav>
  );
};




export default Navigate;
