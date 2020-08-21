import React from 'react';
import NavBundle from '../Navigate/Navigate.module.css';
import { NavLink } from 'react-router-dom';

const Navigate = () => {
  return (
    <nav className={NavBundle.navigate}>
      <div className="container">
        <ul className={NavBundle.navigate__lists}>
          <li className={NavBundle.navigate__item}><NavLink activeClassName={NavBundle.navigate__active} to="/profile" className={NavBundle.navigate__link}>Profile</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/dialogs" activeClassName={NavBundle.navigate__active} className={NavBundle.navigate__link}>Dialogs</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/news" activeClassName={NavBundle.navigate__active} className={NavBundle.navigate__link}>News</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/music" activeClassName={NavBundle.navigate__active} className={NavBundle.navigate__link}>Music</NavLink></li>
          <li className={NavBundle.navigate__item}><NavLink to="/settings" activeClassName={NavBundle.navigate__active} className={NavBundle.navigate__link}>Settings</NavLink></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigate;