import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';

const style = {
  fontSize: 15,
  marginLeft: 3,
  marginRight: 3,
  fontWeight: 800,
};

const Headlink = ({ setMouseHover }: any) => {
  const md = useMediaQuery('(max-width:1000px)');

  return (
    <div>
      {!md ? (
        <Box onMouseEnter={() => setMouseHover(false)} sx={{ display: 'flex' }}>
          <Typography sx={style}></Typography>
          <Typography sx={style}>NOTICE</Typography>
          <Typography sx={style}>ARTIST</Typography>
          <Typography sx={style}>madEDAM</Typography>
          <Typography sx={style}>AUDITION</Typography>
          <Typography sx={style}>CONTACT US</Typography>
          <Box sx={style}> | </Box>
        </Box>
      ) : null}
    </div>
  );
};

export default Headlink;
