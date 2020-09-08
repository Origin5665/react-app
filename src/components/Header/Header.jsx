import React from 'react';
import HeaderBundle from '../Header/Header.module.css';
import headerlogo from '../../images/logo192.png';
import telegramlogo from '../../images/telegram.svg';
import gitlogo from '../../images/github-image.svg';

const Header = () => {
  return (
    <header className={HeaderBundle.header}>
      <div className={HeaderBundle.header__wrapper}>
        <img alt="logo" className={HeaderBundle.header__logo} src={headerlogo} />
        <div className="header__social">
          <img alt="logo" className={HeaderBundle.header__logo} src={telegramlogo} />
          <img alt="logo" className={HeaderBundle.header__logo} src={gitlogo} />
        </div>
      </div>

    </header>
  )
}

export default Header;