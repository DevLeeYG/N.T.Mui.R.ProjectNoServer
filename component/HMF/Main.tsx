import React from 'react';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import Container from '@mui/material/Container';
import { useStyles } from './HeadSource';

const Main = () => {
  const xs = useMediaQuery('(max-width:375px)');
  const sm = useMediaQuery('(max-width:768px)');

  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',

        backgroundColor: 'black',
      }}
    >
      {xs ? (
        <>
          <CardMedia
            sx={{
              display: 'flex',
              width: '375px',
              height: '812px',
            }}
            component="img"
            src="/img/home1.jpg"
          />
        </>
      ) : (
        <>
          <CardMedia
            sx={{
              display: 'flex',
            }}
            component="img"
            src="/img/home1.jpg"
          />
        </>
      )}
    </Box>
  );
};

export default Main;
