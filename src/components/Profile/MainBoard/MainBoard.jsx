import React from 'react';
import MainBoardBundle from '../MainBoard/MainBoard.module.css'

const MainBoard = () => {
  return (
    <div className="mainboard">
      <div className="container">
        <img className={MainBoardBundle.mainboard__image} src="https://images.unsplash.com/photo-1464938050520-ef2270bb8ce8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80" />
      </div>
    </div>
  )
};

export default MainBoard;