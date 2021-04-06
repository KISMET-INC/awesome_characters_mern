import React, { useState } from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../static/css/SimpleMenu.css'
import NameModal from './NameModal';
import HomeBtn from './buttons/HomeBtn';
import SearchBtn from './buttons/SearchBtn';
import AddCharIcon from './buttons/AddBtn';







export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [location] = useState('dropdown')

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
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

  



  return (
    <div id ='Dropdown_Menu'>
      <i onClick = {handleClick} className="fas fa-ellipsis-v"></i>
      <Menu
        id="Menu_Items"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem style={menuItem} onClick={handleClose}><HomeBtn type = 'link_icon'/></MenuItem>

        <MenuItem style={menuItem} onClick={handleClose}><SearchBtn type= 'link_icon'/> </MenuItem>

        <MenuItem style={menuItem} onClick={handleClose}><AddCharIcon type ='link_icon' /></MenuItem>

        <MenuItem style={menuItem} onClick={handleClose}><NameModal location={ location } /></MenuItem>

      </Menu>
    </div>
  );
}