import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../static/css/SimpleMenu.css'
import TransitionsModal from './TransitionalModal';

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [location] = useState('dropdown')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  //*********************************************//  */
  // Styles
  //*********************************************//  */
  const menuItem = {
    fontSize: '12px',
    fontFamily: 'var(--comforta)',
    margin:'0px',
    minHeight:'unset',
    backgroundColor: 'black',
    textAlign: 'right',
  }

  const icon = {
    marginLeft:  '20px',
    textAlign: 'right',
  }

  const icon2 = {
    marginLeft:  '40px',
    textAlign: 'right',
  }

  const menuIcon = {
    fontSize: '30px',
  }



  return (
    <div id ='simple_menu'>
      <i style ={menuIcon} onClick = {handleClick} class="fas fa-ellipsis-v"></i>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={menuItem} onClick={handleClose}>Home<i style={icon} className="fas fa-home"></i></MenuItem>
        <MenuItem style={menuItem} onClick={handleClose}>Search <i style={icon} className="fas fa-search"></i> </MenuItem>
        <MenuItem style={menuItem} onClick={handleClose}>Add <i style={icon2} className="fas fa-plus-square"></i></MenuItem>
        <MenuItem style={menuItem} onClick={handleClose}><TransitionsModal location={ location } /></MenuItem>

      </Menu>
    </div>
  );
}