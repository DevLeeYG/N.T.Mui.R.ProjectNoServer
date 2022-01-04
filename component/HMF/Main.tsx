import React from 'react';
import { CardMedia, Box } from '@mui/material';
import { useStyles } from './HeadSource';
import { keyframes } from '@emotion/react';
const Main = () => {
  const classes = useStyles();

  const zoom = keyframes`

50% {
  transform: scale(1.1,1.1);
}

  }
  `;

  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        height: '100vh',

        backgroundColor: '#121212',
      }}
    >
      <Box className={classes.root} sx={{ overflow: 'hidden' }}>
        <CardMedia
          sx={{ animation: `${zoom} 11s ease-out infinite;` }}
          className={classes.root}
          component="img"
          src="/img/home1.jpg"
        />
      </Box>
    </Box>
  );
};

export default Main;
