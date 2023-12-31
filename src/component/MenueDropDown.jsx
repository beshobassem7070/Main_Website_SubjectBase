import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {Link} from 'react-router-dom';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logOut=()=>{
    sessionStorage.removeItem('token');
    window.location.reload();
    this.props.history.replace('/')
  }

  return (
    <div className='userdropdown'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        حسابي
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem> <Link to="/profile"> حسابي </Link> </MenuItem>
        <MenuItem > <Link to="/mylectures"> المحاضرات </Link> </MenuItem>
        <MenuItem onClick={logOut}>تسجيل الخروج</MenuItem>
      </Menu>
    </div>
  );
}