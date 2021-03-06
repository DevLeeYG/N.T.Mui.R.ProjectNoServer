import { Box, CardMedia, Typography } from '@mui/material';
import React from 'react';
import { useRouter } from 'next/router';
import { Foot, Footsns, Sns, Text } from './HeadSource';
const Footer = () => {
  const classes = Foot();
  const classesn = Footsns();
  const sns = Sns();
  const text = Text();
  // const href = window.location.href;
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <Box className={classes.root}>
      <Box>
        {asPath !== '/' ? (
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              marginTop: '5px',
              marginBottom: '20px',
            }}
          >
            <CardMedia
              className={classes.logo}
              component="img"
              src="/img/logo.png"
            />
          </Box>
        ) : null}

        <Box className={classesn.root}>
          <CardMedia
            className={sns.root}
            component="img"
            src="/img/naver.jpg"
          />
          <CardMedia className={sns.root} component="img" src="/img/bird.jpg" />
          <CardMedia
            className={sns.root}
            component="img"
            src="/img/insta.jpg"
          />
          <CardMedia
            className={sns.root}
            component="img"
            src="/img/youtube.jpg"
          />
        </Box>
        <Box>
          <Typography className={text.root}>Covered By DeveLeeYG</Typography>
        </Box>
        <Box className={text.root}>
          &copy; 2022.01.01 DevLeeYG.All rights reserved
        </Box>
      </Box>
    </Box>
  );
};
//이미지 경로를 정확히 지정해줬더니 잘 나왔다
export default Footer;
