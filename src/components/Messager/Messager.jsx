import React from 'react';
import MessagerSidebar from './MessagerSidebar/MessagerSidebar';
import MessagerFormContainer from '../containers/MessagerFormContainer';
import MessagerChat from './MessagerChat/MessagerChat';

const Messager = () => {


  return (
    <div className="container" >
      <MessagerSidebar />
      <MessagerChat />
      <MessagerFormContainer />
    </div>
  )
};
export default Messager;