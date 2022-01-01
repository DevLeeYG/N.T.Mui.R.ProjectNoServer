import React from 'react';
import { Box } from '@mui/system';

import Typography from '@mui/material/Typography';

const EdamEnt = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '37%',

        p: '0px 15px 0px 15px',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: 'transparent',
      }}
    >
      <Typography fontSize="54px" color="white" fontFamily="serif">
        EDAM
      </Typography>
      <Typography
        fontWeight="600"
        color="white"
        fontFamily="serif"
        variant="h3"
      >
        Entertainment
      </Typography>
    </Box>
  );
};

export default EdamEnt;
