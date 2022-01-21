import { Box, Container } from '@mui/material';
import React from 'react';
import AppLayout from '../../component/AppLayout';
import Index from '../../component/audition/INFORMATION/Index';
import Tab from '../../component/audition/tap/Tab';
import { audition } from '../../makeStyles/audition';

const index = () => {
  const classes = audition();

  return (
    <AppLayout>
      <Container className={classes.container}>
        <Box className={classes.introBox}>
          <h1>
            EDAM Entertaiment <br /> AUDITION
          </h1>
          <Box>
            <p>
              뻔한 생각을 뒤집어 시대에 뛰어넘는 EDAM엔터테인먼트에서
              <br />
              다재다능한 아티스트를 기다리고 있습니다.
              <br className={classes.blockbr} />
              많은 참여 바랍니다.
            </p>
          </Box>
        </Box>
        {/* //////////////////////////////////////////// */}
        <Tab />
        <Index />
      </Container>
    </AppLayout>
  );
};

export default index;
