import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import AppLayout from '../AppLayout';
import { Foot, Footsns, Sns, Text } from './HeadSource';
const Footer = () => {
  const classes = Foot();
  const classesn = Footsns();
  const sns = Sns();
  const text = Text();
  return (
    <Box className={classes.root}>
      <Box>
        <Box className={classesn.root}>
          <CardMedia className={sns.root} component="img" src="img/naver.jpg" />
          <CardMedia className={sns.root} component="img" src="img/bird.jpg" />
          <CardMedia className={sns.root} component="img" src="img/insta.jpg" />
          <CardMedia
            className={sns.root}
            component="img"
            src="img/youtube.jpg"
          />
        </Box>
        <Box>
          <Typography
            className={text.root}
            sx={{ marginBottom: '10px' }}
            color="white"
          >
            Covered By DeveLeeYG
          </Typography>
        </Box>
        <Box
          className={text.root}
          sx={{ fontSize: '5px' }}
          textAlign="center"
          color="white"
        >
          &copy; 2022.01.01 DevLeeYG.All rights reserved.
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
