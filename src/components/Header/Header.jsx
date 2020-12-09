import React from 'react';
import style from '../Header/Header.module.css';
import Icon from 'react-icons-kit';
import MenuBar from './../common/Menu/Menu';

import { useMediaQuery } from 'react-responsive';
import { ContextStore } from '../../ContextStore';
import { navicon } from 'react-icons-kit/fa/navicon';


const Navbar = ({ isAuth, loginId, userLogout }) => {

  const { setSideBarState, sideBarState } = React.useContext(ContextStore);

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 574px)' });

  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <button onClick={() => setSideBarState(!sideBarState)}
          className={style.header__button_menu}>
          <Icon icon={navicon} size={
            isTabletOrMobile
              ? 16
              : 32
          }
          />
        </button>
        <h2 className={style.header__title}>React Social Club</h2>
        {isAuth && <MenuBar loginId={loginId} userLogout={userLogout} />}
      </div>
    </header >

  )
};

export default Navbar;