import React, { useState } from 'react';
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
  marginRgiht: 3,
  fontWeight: 800,
};
const Headlink = () => {
  const [mouseHover, setMouseHover] = useState<Boolean>(false);
  return (
    <Box sx={{ display: 'flex' }}>
      <Typography sx={style}>EDAM</Typography>
      <Typography sx={style}>NOTICE</Typography>
      <Typography sx={style}>ARTIST</Typography>
      <Typography sx={style}>madEDAM</Typography>
      <Typography sx={style}>AUDITION</Typography>
      <Typography sx={style}>CONTACT US</Typography>
      <Box sx={style}> | </Box>

      <Typography onMouseEnter={() => setMouseHover(true)} sx={style}>
        KOR
      </Typography>
      {mouseHover ? (
        <Paper
          onMouseLeave={() => setMouseHover(false)}
          sx={{
            position: 'absolute',
            top: '64px',
            right: 50,
            marginRight: 1.5,
            borderRadius: '0px 0px 5px 5px',
          }}
        >
          <Typography sx={{ p: 2 }}>ENG</Typography>
          <Typography sx={{ p: 2 }}>CHN</Typography>
        </Paper>
      ) : null}
    </Box>
  );
};

export default Headlink;
