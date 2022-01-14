import React from 'react';
import { Box } from '@mui/system';
import { about } from '../../makeStyles/aboutEdam';

const AboutEdamEnter = () => {
  const edam = about();
  return (
    <div className={edam.head}>
      <div className={edam.edam}>EDAM</div>
      <div className={edam.enter}>Entertainment</div>
    </div>
  );
};

export default AboutEdamEnter;
