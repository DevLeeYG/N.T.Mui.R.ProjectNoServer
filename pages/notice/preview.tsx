/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../component/AppLayout';
import axios from 'axios';
import { BigBox, MiddleBox, SmallBox } from './noticeSource';

const preview = () => {
  const classes = BigBox();
  const middleB = MiddleBox();
  const noticeApi = 'http://localhost:3000/api/notice';
  const smallB = SmallBox();
  type Data = {
    id: number;
    date: Date;
    user: string;
    hit: number;
    title: string;
    post: string;
  }[];
  const [notice, setNotice] = useState<Data>([]);

  const getList = () => {
    return axios.get(noticeApi).then((data) => setNotice(data.data));
  };

  useEffect(() => {
    getList();
  }, []);

  console.log('notice', notice);

  const a = notice.map((el, idx) => {
    const day = el.date.substr(0, 7);
    const yearMonth = el.date.substr(0, 2);
    const preview = el.post.substr(0, 70);
    return (
      <Box key={el.id} className={smallB.root}>
        <Box sx={{ display: { xs: 'none' } }}>
          <Box>{yearMonth}</Box>
          <Box>{day}</Box>
        </Box>
        <Box>
          <Box className={smallB.title}>[아이유]아이유 조각집 발매 안내</Box>
          <Box className={smallB.preview}>
            <Box>{preview}...</Box>

            <Box className={smallB.bottomBox}>
              <Box
                sx={{ display: { md: 'none' } }}
                className={smallB.bottomSolo}
              >
                {el.date}
              </Box>
              <Box className={smallB.bottomSolo}>작성자:{el.user}</Box>
              <Box className={smallB.bottomSolo}>조화:{el.hit}</Box>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <AppLayout>
      <Box className={classes.root}>
        <Box className={middleB.root}>{a}</Box>
      </Box>
    </AppLayout>
  );
};

export default preview;
