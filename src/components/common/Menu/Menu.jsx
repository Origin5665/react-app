import React from 'react'

// MaterialUI
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';




const MenuBar = ({ logoutProfile }) => {

   const [anchorEl, setAnchorEl] = React.useState(null);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <div>
         <IconButton
            aria-label="more"
            aria-controls="long-menu"
            aria-haspopup="true"
            onClick={handleClick}
         >
            <MoreVertIcon />
         </IconButton>
         <Menu
            id="user-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
         >
            <MenuItem onClick={logoutProfile}>Выход</MenuItem>

         </Menu>
      </div>
   );


}

export default MenuBar;