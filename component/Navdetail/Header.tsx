import React, { useMemo, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styled from 'styled-components';
import { useMediaQuery } from '@material-ui/core';
import { Props } from '../Props';
import Link from 'next/link';
import AccountModal from '../Navdetail/AccountModal';
import Sidebar from '../com/Sidebar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Fade from '@mui/material/Fade';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
type homemanu = {
  marginRight: string;
  marginLeft: string;
};

let styles: homemanu = {
  marginRight: '50px',
  marginLeft: '50px',
};

const Div = styled.div`
  height: 64px;
`;

const Header = ({ children }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const isXs = useMediaQuery('(max-width:768px)');
  const [sidebar, setSidebar] = useState<Boolean>(false);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar>
          <Toolbar
            sx={{ position: 'fixed', width: '100%', backgroundColor: 'black' }}
          >
            <Sidebar />

            {isXs ? (
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, textAlign: 'center' }}
              >
                <Link passHref href="/">
                  <a> ARIANA GRANDE</a>
                </Link>
              </Typography>
            ) : (
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link passHref href="/">
                  <a> ARIANA GRANDE</a>
                </Link>
              </Typography>
            )}
            <Box
              sx={{
                flexGrow: 1,

                display: { xs: 'none', sm: 'block' },
              }}
            >
              <Link passHref href="/stars/pick">
                <a style={styles}>STAR'S</a>
              </Link>
              <Link passHref href="/journal">
                <a style={styles}>journal</a>
              </Link>
              <Link passHref href="/contact">
                <a style={styles}>contact</a>
              </Link>
            </Box>
            <div>
              <Button
                onClick={handleClick}
                aria-haspopup="true"
                sx={{ color: 'white' }}
              >
                <NotificationsIcon />
              </Button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                <MenuItem>Profile</MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
            {isXs ? null : <AccountModal>Login</AccountModal>}
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
