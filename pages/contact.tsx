import { Typography, Container, Box } from '@mui/material';
import React from 'react';
import AppLayout from '../component/AppLayout';
import Qnt from '../component/audition/INFORMATION/components/QnT/Qnt';
import { contactUs } from '../makeStyles/contact';
const contact = () => {
  console.log(contactUs);
  const classes = contactUs();

  return (
    <AppLayout>
      <Container>
        <Box
          className={classes.Contactbox}
          sx={{ bgcolor: '#cfe8fc', height: '100vh' }}
        >
          <Box>
            <Typography component="h1">Contact us</Typography>

            <Box>
              <Typography component="dl">
                <Typography component="dt">주소</Typography>
                <Typography component="dd">
                  서울시 강남구 테헤란로 103길 17 EDAM엔터테이먼트
                </Typography>
              </Typography>
              <Typography component="dl">
                <Typography component="dt">E-mail</Typography>
                <Typography component="dd">edam@edam-ent.com</Typography>
              </Typography>
            </Box>
          </Box>
          <Qnt />
        </Box>
      </Container>
    </AppLayout>
  );
};

export default contact;
