import React, { useState } from 'react';
import { auditionInfo, Faq, dummy } from '../../../makeStyles/audition';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const index = () => {
  const [drop, setDrop] = useState([...dummy]);

  const classes = auditionInfo();
  const faq = Faq();

  const dropDwon = (id: number) => {
    drop.map((el) => {
      if (id === el.id) {
        el.dropCheck = true;
        if (el.dropCheck === true) {
          el.style = {
            borderTop: '1px solid black',
            borderBottom: '1px solid black',
          };
        }
      } else {
        el.dropCheck = false;

        el.style = {
          borderBottom: '1px solid #e1e1e1',
        };
        if (el.id === 1) {
          el.style = {
            borderTop: '1px solid #e1e1e1',
            borderBottom: '1px solid #e1e1e1',
          };
        }
      }
    });
    setDrop([...drop]);
  };

  const list = drop.map((el) => {
    return (
      <Typography onClick={() => dropDwon(el.id)} key={el.id} component="li">
        <Box>
          <Box sx={el.style} className={faq.list}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h4">
                <span>{el.title}</span>
              </Typography>

              <Box>
                {el.dropCheck === true ? (
                  <KeyboardArrowDownIcon />
                ) : (
                  <KeyboardArrowUpIcon />
                )}
              </Box>
            </Box>
            {el.dropCheck === true ? (
              <Box className={faq.listItem} sx={{ wordBreak: 'keep-all' }}>
                <Box className={faq.content}>{el.content}</Box>
              </Box>
            ) : null}
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
