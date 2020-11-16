import React from 'react';
import style from '../Header/Header.module.css';
import { navicon } from 'react-icons-kit/fa/navicon'
import Icon from 'react-icons-kit';
import { useMediaQuery } from 'react-responsive'
import PreLoader from '../common/PreLoader/Preloader';

import MenuBar from './../common/Menu/Menu'
import { ContextStore } from '../../ContextStore';

const Navbar = (props) => {

  const { setSideBarState, sideBarState } = React.useContext(ContextStore)
  const [load, setLoad] = React.useState(false) // загрузка изображения

  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 478px)' }) // Медиа выражение

  React.useEffect(() => {
    const fetchData = async () => {
      await props.getUserProfileCreator(props.loginId)
      setLoad(true)
    }
    fetchData()

  }, []); // получение данных с сервера


  return (
    <header className={style.header}>
      <div className={style.header__wrapper}>
        <button onClick={() => setSideBarState(!sideBarState)} className={style.header__button_menu}>
          <Icon icon={navicon} size={
            isTabletOrMobile
              ? 16
              : 32
          }
          />
        </button>
        <h2 className={style.header__title}>React Social Club</h2>

        {
          load ? <MenuBar data={props.data} />

            : <PreLoader />
        }




      </div>
    </header >

  )
};

export default Navbar;