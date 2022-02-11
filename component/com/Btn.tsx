import React from 'react';
import { Button } from '@mui/material';
import { btn } from '../../makeStyles/Buttoncss';
const Buttons = () => {
  const classes = btn();
  return (
    <div className={classes.container}>
      <Button disableRipple className={classes.root} fullWidth>
        지원서 다운로드
      </Button>
    </div>
  );
};

export default Buttons;
