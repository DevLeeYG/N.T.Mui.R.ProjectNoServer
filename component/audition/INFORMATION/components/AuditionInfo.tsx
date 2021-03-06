import { Container, Box, Typography } from '@mui/material';
import React from 'react';
import { audition } from '../../../../makeStyles/audition';
const AuditionInfo = () => {
  const classes = audition();

  return (
    <Box>
      <Box className={classes.infobox} component="div">
        <dl>오디션 지원 안내</dl>
        <dl className={classes.textflex}>
          <dt>지원 기간</dt>
          <p>수시접수</p>
        </dl>
        <dl className={classes.textflex}>
          <dt>지원 기간</dt>
          <p>국적, 성별, 학력, 나이 제한 없음</p>
        </dl>
        <dl>
          <Box className={classes.textflex}>
            <Box>
              <dt className={classes.HowToApply}>지원 방법</dt>
            </Box>
            <Box>
              <p>이메일 접수</p>

              <div className={classes.dash}>
                <p>접수 메일 : audition@edam-ent.com</p>
              </div>
              <div className={classes.dash}>
                <p>
                  이메일 접수 시 메일 제목은‘[EDAM오디션/오디션 지원
                  분야(가수or연기)] 이름_생년월일’ 통일
                </p>
              </div>
              <p>
                ex) [EDAM오디션/가수] 홍길동_990101 / [EDAM오디션/연기]
                홍길동_990101
              </p>
              <p style={{ fontWeight: 'bold' }}>
                *직접 방문 접수는 받지 않고 있습니다
              </p>
            </Box>
          </Box>
        </dl>
      </Box>
    </Box>
  );
};

export default AuditionInfo;
