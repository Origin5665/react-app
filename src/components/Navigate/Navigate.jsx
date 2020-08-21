import React from 'react';
import NavBundle from '../Navigate/Navigate.module.css';

const Navigate = () => {
  return (
    <nav className={NavBundle.navigate}>
      <div className="container">
        <ul className={NavBundle.navigate__lists}>
          <li className={NavBundle.navigate__item}><a href="/profile" className={NavBundle.navigate__link}>Profile</a></li>
          <li className={NavBundle.navigate__item}><a href="/dialogs" className={NavBundle.navigate__link}>Dialogs</a></li>
          <li className={NavBundle.navigate__item}><a href="/news" className={NavBundle.navigate__link}>News</a></li>
          <li className={NavBundle.navigate__item}><a href="/music" className={NavBundle.navigate__link}>Music</a></li>
          <li className={NavBundle.navigate__item}><a href="/sittings" className={NavBundle.navigate__link}>Settings</a></li>
        </ul>
      </div>
    </nav>
  )
};

export default Navigate;