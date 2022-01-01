import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import AppLayout from '../AppLayout';

const Footer = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100%',
        backgroundColor: '#121212',
        justifyContent: 'center',
        padding: '30px',
      }}
    >
      <Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
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
        <Box>
          <Typography
            sx={{ textAlign: 'center', marginBottom: '30px' }}
            color="white"
          >
            Covered By DeveLeeYG
          </Typography>
        </Box>
        <Box sx={{ fontSize: '5px' }} textAlign="center" color="white">
          &copy; 2022.01.01 DevLeeYG.All rights reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
