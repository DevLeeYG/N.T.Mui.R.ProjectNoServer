import React, { useMemo } from 'react';
import { Box } from '@mui/system';

import Typography from '@mui/material/Typography';
import { fontStyle } from '../HMF/HeadSource';
import { CardMedia } from '@mui/material';
const EdamEnt = () => {
  const classes = fontStyle();

  return (
    <Box className={classes.root}>
      <h1 style={{ marginBottom: 0, marginTop: 0 }} className="Edam">
        EDAM
      </h1>
      <h2 style={{ marginBottom: 0, marginTop: 0 }} className="Entertai">
        Entertaiment
      </h2>
    </Box>
  );
};

export default EdamEnt;
