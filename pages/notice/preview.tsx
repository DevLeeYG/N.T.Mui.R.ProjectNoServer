/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../component/AppLayout';
import Footer from '../../component/HMF/Footer';
import Header from '../../component/HMF/Header';
import Link from 'next/link';
import axios from 'axios';
import { BigBox, MiddleBox, SmallBox } from './noticeSource';
import rootReducer from '../../reducers';
const preview = () => {
  const classes = BigBox();
  const middleB = MiddleBox();
  const noticeApi = 'http://localhost:3000/api/notice';
  const smallB = SmallBox();
  const [notice, setNotice] = useState('');
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    axios.get(noticeApi).then((res) => {
      setNotice(res);
    });
  }, []);

  return (
    <AppLayout>
      <Box className={classes.root}>
        <Box className={middleB.root}>
          {/**중간박스 */}
          <Box className={smallB.root}>
            {/**작은박스 */}
            <Box sx={{ display: 'none' }}>
              <Box>29</Box>
              <Box>2021.12</Box>
            </Box>
            <Box>
              <Box className={smallB.title}>
                [아이유]아이유 조각집 발매 안내
              </Box>
              <Box className={smallB.preview}>
                <Box>
                  아이유 조각집 발매안내 구태여 바깥에 내놓지 않았던 내이십대의
                  그 사이사이 조각들
                </Box>

                <Box className={smallB.bottomBox}>
                  <Box className={smallB.bottomSolo}>2021-12-29</Box>
                  <Box className={smallB.bottomSolo}>
                    작성자:EDAM엔터테이먼트
                  </Box>
                  <Box className={smallB.bottomSolo}>조화:580</Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default preview;
/**게시판 틀을 만들자 */
