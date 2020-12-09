import React from 'react';
import MessagerSidebar from './MessagerSidebar/MessagerSidebar';
import MessagerFormContainer from '../containers/MessagerFormContainer';
import MessagerChat from './MessagerChat/MessagerChat';
import styles from './Messager.module.css';

const Messager = () => {

  return (
    <div className={"container " + styles.wrapper}>
      <div className={styles.messager__wrapper}>
        <MessagerSidebar />
        <MessagerChat />
      </div>
      <MessagerFormContainer />
    </div>
  )
};
export default Messager;