import { Box, CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import React, { useState } from 'react';
import AppLayout from '../component/AppLayout';
import { container } from '../makeStyles/artists';
const artists = () => {
  const classes = container();
  const [hover, setHover] = useState(false);
  const [sgHover, setSgHover] = useState(false);
  return (
    <AppLayout>
      <div className="Container">
        <div className={classes.artistContainer}>
          <div className={classes.titleContainer}>
            <div className={classes.title}>
              <h1>Artists</h1>
            </div>
          </div>{' '}
        </div>

        <div className={classes.artists}>
          <Box
            onMouseEnter={() => setHover(!hover)}
            onMouseLeave={() => setHover(false)}
            className={classes.containerBox}
          >
            {hover && (
              <Box className={classes.innerBox}>
                <Box className={classes.textbox}>아이유(iu)</Box>
              </Box>
            )}

            <CardMedia
              className={classes.artist}
              component="img"
              alt="sg"
              src="/img/iu.jpg"
            />
          </Box>
          <Box
            onMouseEnter={() => setSgHover(!sgHover)}
            onMouseLeave={() => setSgHover(false)}
            className={classes.containerBox}
          >
            {sgHover && (
              <Box className={classes.innerBox}>
                <Box className={classes.textbox}>신세경</Box>
              </Box>
            )}
            <CardMedia
              className={classes.artist}
              component="img"
              alt="sg"
              src="/img/shinsg.jpg"
            />
          </Box>
        </div>
      </div>
    </AppLayout>
  );
};

export default artists;
