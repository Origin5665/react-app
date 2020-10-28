import React from 'react';
import HeaderBundle from '../Header/Header.module.css';
import headerlogo from '../../images/logo192.png';
import telegramlogo from '../../images/telegram.svg';
import gitlogo from '../../images/github-image.svg';


const Header = (props) => {

  return (
    <header className={HeaderBundle.header}>
      <div className={HeaderBundle.header__wrapper}>
        <img alt="logo" className={HeaderBundle.header__logo} src={headerlogo} />
        <h1 className={HeaderBundle.header__title}>React Social Club <span className={HeaderBundle.header__author}>by Origin56</span></h1>
        <div className={HeaderBundle.header__social}>
          {props.isAuth
            ? <button className={HeaderBundle.header__login} onClick={props.logoutCreator} >Выйти</button>
            : <button className={HeaderBundle.header__login} >Войти</button>}
          <a className={HeaderBundle.header__link}
            href="https://t.me/origin56" target="blank">
            <img alt="Логотип месседжера Телеграм. Ссылка для перехода"
              className={HeaderBundle.header__logo} src={telegramlogo} /></a>
          <a className={HeaderBundle.header__link}
            href="https://github.com/Origin5665" target="blank">
            <img alt="Логотип Гитхаб. Ссылка для перехода"
              className={HeaderBundle.header__logo} src={gitlogo} /></a>
        </div>
      </div>
    </header>
  )
};

export default Header;