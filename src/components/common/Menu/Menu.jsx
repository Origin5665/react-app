import React from 'react'
import style from './Menu.module.css'
// MaterialUI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const MenuBar = ({ data }) => {
   const [anchorEl, setAnchorEl] = React.useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <Button aria-controls="user-menu" aria-haspopup="true" onClick={handleClick}>
            <img
               src={data.photos.small}
               alt={'фотография пользователя страницы'}
               className={style.header__login}></img>
         </Button>
         <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem onClick={handleClose}>Настройки</MenuItem>
            <MenuItem onClick={handleClose}>Выход</MenuItem>

         </Menu>
      </div>
   );


}

export default MenuBar;