import { CardMedia } from '@mui/material';
import React from 'react';
import AppLayout from '../component/AppLayout';
import { container } from '../makeStyles/artists';
const artists = () => {
  const classes = container();
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
          <CardMedia
            className={classes.artist}
            component="img"
            alt="iu"
            src="/img/iu.jpg"
          />

          <CardMedia
            className={classes.artist}
            component="img"
            alt="sg"
            src="/img/shinsg.jpg"
          />
        </div>
      </div>
    </AppLayout>
  );
};

export default artists;
