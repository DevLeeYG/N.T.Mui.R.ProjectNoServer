import { Container } from '@mui/material';
import React from 'react';
import Aor from './components/Aor';
import AuditionInfo from './components/AuditionInfo';
import Notice from './components/Notice';
import Process from './components/Process';
import { auditionInfo } from '../../../makeStyles/audition';
const Index = () => {
  const classes = auditionInfo();

  return (
    <Container className={classes.info}>
      <AuditionInfo />
      <Process />
      <Aor />
      <Notice />
    </Container>
  );
};

export default Index;
