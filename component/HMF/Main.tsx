import React, { useEffect, useLayoutEffect, useState } from 'react';
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
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',

        backgroundColor: '#121212',
      }}
    >
      <CardMedia
        className={classes.root}
        component="img"
        src="/img/home1.jpg"
      />
    </Box>
  );
};

export default Main;
