//오디션 절차
import React from 'react';
import { Box, Typography, List, ListItem } from '@mui/material';
import { process } from '../../../../makeStyles/audition';

const Process = () => {
  const classes = process();

  return (
    <Box className={classes.root}>
      <Typography className={classes.process} component="p">
        오디션 절차
      </Typography>
      <Box className={classes.processingBox}>
        <List>
          <ListItem className={classes.circle}>
            <Typography
              className={classes.circleText}
              variant="subtitle2"
              component="p"
            >
              이메일 <br />
              접수
            </Typography>
          </ListItem>
          <Box>
            <ListItem className={classes.wideCircle}>
              <Typography
                className={classes.circleText}
                variant="subtitle2"
                component="p"
              >
                1차
              </Typography>
            </ListItem>
            <Typography
              className={classes.circleText2}
              variant="subtitle2"
              component="p"
            >
              지원 자료 심사
            </Typography>
          </Box>
          <Box className={classes.textBox}>
            <ListItem className={classes.wideCircle}>
              <Typography
                className={classes.circleText}
                variant="subtitle2"
                component="p"
              >
                2차
              </Typography>
            </ListItem>
            <Typography
              className={classes.circleText2}
              variant="subtitle2"
              component="p"
            >
              오프라인 개별 오디션
            </Typography>
          </Box>
          <ListItem className={classes.circle}>
            <Typography
              className={classes.circleText}
              variant="subtitle2"
              component="p"
            >
              최종 합격자 <br />
              선발
            </Typography>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Process;
