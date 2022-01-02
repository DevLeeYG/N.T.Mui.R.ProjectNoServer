import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useMediaQuery } from '@material-ui/core';
import { Typography, CardMedia } from '@mui/material';
import { sidebarlist } from '../HMF/HeadSource';
const drawerWidth = '100%';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',

  padding: '20px 20px 5px 0px',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const listdummy = sidebarlist.map((text, i) => {
  return (
    <Typography
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

const Sidebar = () => {
  const isXs = useMediaQuery('(max-width:768px)');
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      {isXs ? (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            minHeight: 64,

            mr: -1,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
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
