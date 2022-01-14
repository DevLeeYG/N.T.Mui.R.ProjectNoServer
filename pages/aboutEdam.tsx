import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import React from 'react';
import AboutEdamEnter from '../component/aboutEdam/AboutEdamEnter';
import Intro from '../component/aboutEdam/Intro';
import AppLayout from '../component/AppLayout';
import { about } from '../makeStyles/aboutEdam';
const InTro = dynamic(() => import('../component/aboutEdam/Intro'), {
  ssr: false,
});

const aboutEdam = () => {
  const classes = about();
  return (
    <Box className={classes.page}>
      <AppLayout>
        <AboutEdamEnter />
        <InTro />
      </AppLayout>
    </Box>
  );
};

export default aboutEdam;
