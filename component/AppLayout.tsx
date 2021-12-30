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
import { Props } from './Props';
import Link from 'next/link';
import AccountModal from '../component/Navdetail/AccountModal';
import Sidebar from './com/Sidebar';
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
import Header from './Navdetail/Header';

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

const AppLayout = ({ children }: Props) => {
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
      <Header />
      <Div></Div>
      <Box>{children}</Box>
    </div>
  );
};

export default AppLayout;

{
  //     const isXs = useMediaQuery("(max-width:768px)");
  //   /* <IconButton
  // size="large"
  // edge="start"
  // color="inherit"
  // aria-label="menu"
  // sx={{ mr: 2 }}
  // >
  // <MenuIcon sx={{ display: { xs: "block", sm: "none" } }} />
  // </IconButton> */
}

// {isXs ? null : <Button color="inherit">Login</Button>}
