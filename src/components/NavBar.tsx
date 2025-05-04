import React from 'react';
import { AppBar, Toolbar, Box } from '@mui/material';
import { Link } from 'react-router';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between' }}
        >
          <Link style={{ color: 'white', textDecoration: 'none' }} to="/">
            Home
          </Link>

          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/color-changer"
          >
            Color Changer
          </Link>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/example"
          >
            Example
          </Link>
          <Link
            style={{ color: 'white', textDecoration: 'none' }}
            to="/mui-poc"
          >
            MUI POC
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
