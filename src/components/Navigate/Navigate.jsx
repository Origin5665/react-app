import React from 'react';
import NavBundle from '../Navigate/Navigate.module.css';
import { NavLink } from 'react-router-dom';
import newslogo from '../../images/newspaper.svg';
import musiclogo from '../../images/song.svg';
import profilelogo from '../../images/user.svg';
import messagelogo from '../../images/email.svg';
import settinglogo from '../../images/settings.svg';
import { Icon } from 'react-icons-kit'
import { home } from 'react-icons-kit/fa/home'
import { ic_textsms } from 'react-icons-kit/md/ic_textsms'
import { Paper } from '@material-ui/core'






const Navigate = () => {



  return (
    <nav className={NavBundle.navigate}>
      <div className="container">
        <ul className={NavBundle.navigate__lists}>
          <li className={NavBundle.navigate__item}><NavLink to="/profile" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}><Icon icon={home} size={64} />Профиль</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/users" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}>Пользователи<img src={settinglogo} width='20px' alt="Пользователь" /></NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/dialogs" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}><Icon icon={ic_textsms} size={32} />Сообщения</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/news" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}>Новости <img src={newslogo} width='20px' alt="Новости" /></NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/music" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}>Музыка<img src={musiclogo} width='20px' alt="Музыка" /></NavLink></li>
          <li aria-disabled={true} className={NavBundle.navigate__item}><NavLink to="/settings" activeClassName={NavBundle.navigate__active}
            className={NavBundle.navigate__link}>Настройки<img src={settinglogo} width='20px' alt="Настройки" /></NavLink></li>
        </ul>
      </div>
    </nav>


  );
}




export default Navigate;
