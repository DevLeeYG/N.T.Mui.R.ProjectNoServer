import React from 'react';
import { Box, Typography } from '@mui/material';
import { audition } from '../../../../makeStyles/audition';

const Notice = () => {
  const classes = audition();

  return (
    <Box className={classes.noticeBox}>
      <dl>유의사항</dl>
      <Box className={classes.star}>
        <p>
          지원 서류와 함께 지원 분야별 필수 자료를 함께 보내주세요. 제출 자료
          부족 및 미 첨부 시 1차 심사에서 제외됩니다.
        </p>
      </Box>
      <Box className={classes.star}>
        <p>
          프로필 이미지 첨부 시 수정된 이미지 혹은 포커스가 맞지 않는 이미지
          또한 1차 심사 대상에서 제외됩니다.
        </p>
      </Box>
      <Box className={classes.star}>
        <p>
          제출하신 자료는 반환해 드리지 않으며, 이용 목적 달성 시 당사에서
          파기합니다.
        </p>
      </Box>
      <Box className={classes.star}>
        <p>
          불합격자에게는 개별 통지 해드리지 않습니다. 이 점 양해 부탁 드립니다.
        </p>
      </Box>
      <Box className={classes.star}>
        <p>
          오프라인 개별 오디션 당일 고열 (37.5도) 혹은 호흡기 증상 있을 시 참가
          불가합니다.
        </p>
      </Box>
    </Box>
  );
};

export default Notice;
