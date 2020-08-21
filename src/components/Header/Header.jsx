import React from 'react';
import HeaderBundle from '../Header/Header.module.css';


const Header = () => {
  return (
    <header className={HeaderBundle.header}>
      <img alt="logo" className={HeaderBundle.header__logo} src="https://www.graphicsprings.com/filestorage/stencils/ab75a5540b0727eecd066a4accc517be.png?width=500&height=500" />
    </header>
  )
}

export default Header;