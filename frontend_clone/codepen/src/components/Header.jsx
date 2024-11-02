import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar'

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar className='bg-black'>
        <img className='w-36 h-12' src='/codepenlogo.png' alt="codepen logo" />
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header