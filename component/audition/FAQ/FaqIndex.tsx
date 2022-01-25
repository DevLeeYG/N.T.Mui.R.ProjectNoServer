import React, { useState } from 'react';
import { auditionInfo, Faq, dummy } from '../../../makeStyles/audition';
import { Box, Container, List, ListItem, Typography } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

interface border {
  borderTop: string;
  borderBottom: string;
}

const style: border = {
  borderTop: '1px solid #e1e1e1',
  borderBottom: '1px solid #e1e1e1',
};

const index = () => {
  const [drop, setDrop] = useState([...dummy]);
  const [check, setCheck] = useState<boolean>(dummy[0].dropCheck);

  const classes = auditionInfo();
  const faq = Faq();

  const dropDwon = (id: number) => {
    const filtered = drop.filter((el) => {
      return id === el.id;
    });
    setCheck(!filtered.dropCheck);
  };

  const list = drop.map((el) => {
    console.log('el', el.id);
    return (
      <Typography onClick={() => dropDwon(el.id)} key={el.id} component="li">
        <Box>
          <Box sx={style} className={faq.list}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography component="h4">
                <span>{el.title}</span>
              </Typography>

              <Box>
                <KeyboardArrowUpIcon />

                <KeyboardArrowDownIcon />
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
