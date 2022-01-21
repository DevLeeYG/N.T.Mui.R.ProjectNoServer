//모집분야
import React from 'react';
import {
  Button,
  Box,
  Typography,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import { process, audition } from '../../../../makeStyles/audition';
import Btn from '../../../com/Btn';
import Resume from './Resume';

const Aor = () => {
  const classes = process();
  const check = audition();
  return (
    <>
      <Typography className={classes.process} component="p">
        모집분야
      </Typography>
      <Container className={classes.aor}>
        <Box className={classes.root}>
          <Box className={classes.singer}>
            <Typography className={classes.singerActorTitle} component="p">
              가수
            </Typography>
            <Box className={classes.part}>
              <Box className={classes.check}>
                <Typography component="p">
                  가요 1곡/팝송 1곡 가창 영상(자유곡/총2곡)
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  각 10분 이내 영상 파일 *MP4/MOV/AVI 형식/ 50mb미만
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  음질이 불량하거나, 영상의 포커스가 맞지 않는 영상은 업로드를
                  피해주시기 바랍니다.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box className={classes.check}>
                <Typography component="p">프로필 이미지</Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  정면 상반신 이미지 *JPG/GIF/PNG 형식
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  리터치 하지 않은 원본 사진 첨부 필수
                </Typography>
              </Box>
              <Box className={classes.plus}>
                <Typography component="p">
                  (선택사항)댄스, 악기 연주 등 특기를 보여줄 수 있는 영상
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
        {/** */}
        <Box className={classes.root}>
          <Box className={classes.actor}>
            <Typography className={classes.singerActorTitle} component="p">
              연기
            </Typography>
            <Box className={classes.part}>
              <Box className={classes.check}>
                <Typography component="p">
                  가요 1곡/팝송 1곡 가창 영상(자유곡/총2곡)
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  각 10분 이내 영상 파일 *MP4/MOV/AVI 형식/ 50mb미만
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  음질이 불량하거나, 영상의 포커스가 맞지 않는 영상은 업로드를
                  피해주시기 바랍니다.
                </Typography>
              </Box>
            </Box>
            <Box>
              <Box className={classes.check}>
                <Typography component="p">프로필 이미지</Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  정면 클로즈업 이미지/상반신 정면, 좌, 우 이미지/전신 이미지
                  (총 5장) *JPG/GIF/PNG 형식
                </Typography>
              </Box>
              <Box className={classes.notice}>
                <Typography component="p">
                  리터치 하지 않은 원본 사진 첨부 필수
                </Typography>
              </Box>
              <Box className={classes.plus}>
                <Typography component="p">
                  (선택사항)댄스, 악기 연주 등 특기를 보여줄 수 있는 영상
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <Resume />
    </>
  );
};

export default Aor;

{
  /* <Typography component="p">자유 연기 영상(장르 제한 없음)</Typography>
<Typography component="p">
  음질이 불량하거나, 영상의 포커스가 맞지 않는 영상은 업로드를
  피해주시기 바랍니다.
</Typography>
<Typography component="p">프로필 이미지</Typography>
<Typography component="p">
  정면 클로즈업 이미지/상반신 정면,좌,우 이미지/전신 이미지(총 5장)
</Typography>
<Typography component="p">*JPG/GIF/PNG형식</Typography>
<Typography component="p">
  (선택사항)댄스, 악기 연주 등 특기를 보여줄 수 있는 영상
</Typography> */
}
