import { Box, Typography } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import FmdBadIcon from '@mui/icons-material/FmdBad';
import React from 'react';
import { contactUs } from '../../../../../makeStyles/contact';
const Qnt = () => {
  const classes = contactUs();

  return (
    <Box className={classes.QnTBox}>
      <Box className={classes.QnTMiddleBox}>
        <Typography className={classes.MailBox} component="ul">
          <Typography className={classes.Icons} component="li">
            <MailIcon className={classes.Icon} />
          </Typography>
          <Typography className={classes.qnt} component="li">
            아이유 관련 문의/건의
          </Typography>
          <Typography className={classes.mail} component="li">
            iu-official@daum.net
          </Typography>
        </Typography>
      </Box>
      <Box className={classes.QnTMiddleBox}>
        <Typography className={classes.MailBox} component="ul">
          <Typography className={classes.Icons} component="li">
            <ReportProblemIcon className={classes.Icon} />
          </Typography>
          <Typography className={classes.qnt} component="li">
            아이유 관련 악플 신고
          </Typography>
          <Typography className={classes.mail} component="li">
            iufan.report@gmail.com
          </Typography>
        </Typography>
      </Box>
      <Box className={classes.QnTMiddleBox}>
        <Typography className={classes.MailBox} component="ul">
          <Typography className={classes.Icons} component="li">
            <FmdBadIcon className={classes.Icon} />
          </Typography>
          <Typography className={classes.qnt} component="li">
            신세경 관련 문의/건의/신고
          </Typography>
          <Typography className={classes.mail} component="li">
            saekyeong.official@gmail.com
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default Qnt;
