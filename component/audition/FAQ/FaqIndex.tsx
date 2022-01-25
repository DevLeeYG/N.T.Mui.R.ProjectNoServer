import React from 'react';
import { auditionInfo, Faq, dummy } from '../../../makeStyles/audition';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const index = () => {
  const classes = auditionInfo();
  const faq = Faq();
  const list = dummy.map((el) => {
    return (
      <Typography component="li">
        <Box>
          <Box className={faq.list}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h4">
                <span>{el.title}</span>
              </Typography>
              <Box>
                <KeyboardArrowDownIcon />
                {/* <KeyboardArrowUpIcon /> */}
              </Box>
            </Box>
            <Box className={faq.listItem} sx={{ wordBreak: 'keep-all' }}>
              <Box className={faq.content}>{el.content}</Box>
            </Box>
          </Box>
          <Box></Box>
        </Box>
      </Typography>
    );
  });

  return (
    <Container className={classes.info}>
      <Typography className={faq.FAQ} component="p">
        FAQ
      </Typography>
      <Typography component="ul">{list}</Typography>

      <Box sx={{ height: '80px' }} />
    </Container>
  );
};

export default index;
