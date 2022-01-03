import { CardMedia } from '@mui/material';
import React from 'react';
import { FooterStyle } from '../HMF/HeadSource';
const Footerimg = () => {
  const classes = FooterStyle();
  return (
    <div>
      <CardMedia
        className={classes.root}
        component="img"
        src="/img/footerlogo.jpg"
      />
    </div>
  );
};

export default Footerimg;
