import React, { useEffect } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useMediaQuery } from '@material-ui/core';
import { Typography, CardMedia } from '@mui/material';
import { sidebarlist } from '../HMF/HeadSource';
import { useRouter } from 'next/router';

const drawerWidth = '100%';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  padding: '20px 20px 5px 0px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Sidebar = () => {
  const listdummy = sidebarlist.map((text, i) => {
    return (
      <Typography
        onClick={() => router.push(text.path)}
        sx={{
          paddingLeft: 5,
          paddingBottom: 2,
          fontWeight: 600,
          fontSize: 20,

          cursor: 'pointer',
        }}
        variant="inherit"
        key={text.id}
      >
        {text.text}
      </Typography>
    );
  });

  const isXs = useMediaQuery('(max-width:1000px)');
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const iconStyle = {
    marginLeft: 0.5,
    color: 'white',
    ...(open && { display: 'none' }),
  };
  const wb = () => {
    if (router.asPath !== '/') {
      iconStyle.color = 'black';
    }
    console.log(router.asPath);
  };

  wb();

  return (
    <Box sx={{ display: 'flex' }}>
      {isXs ? (
        <IconButton
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={iconStyle}
        >
          <MenuIcon fontSize="large" />
        </IconButton>
      ) : null}

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,

          '& .MuiDrawer-paper': {
            backgroundColor: 'black',
            color: 'white',

            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        // variant="persistent" 이걸없앴더니 제일 위로 올라갔다
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton sx={{ color: 'white' }} onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon sx={{ fontSize: '50px' }} />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List>{listdummy}</List>

        <List sx={{ marginTop: 2.5, p: 4 }}>
          <Typography
            variant="inherit"
            sx={{ display: 'flex', marginBottom: 2, paddingLeft: 1 }}
          >
            Coverd by DevLeeYG
          </Typography>

          <Box
            sx={{
              display: 'flex',

              marginBottom: '10px',
            }}
          >
            <CardMedia
              sx={{ width: '30px' }}
              component="img"
              src="img/naver.jpg"
            />
            <CardMedia
              sx={{ width: '30px' }}
              component="img"
              src="img/bird.jpg"
            />
            <CardMedia
              sx={{ width: '30px' }}
              component="img"
              src="img/insta.jpg"
            />
            <CardMedia
              sx={{ width: '30px' }}
              component="img"
              src="img/youtube.jpg"
            />
          </Box>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
