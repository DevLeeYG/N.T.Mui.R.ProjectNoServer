import { Box, CardMedia } from '@mui/material';
import React from 'react';
import { about } from '../../makeStyles/aboutEdam';
import Image from 'next/image';
const Intro = () => {
  const classes = about();
  console.log('clas', classes);

  return (
    <>
      <Box className={classes.intro}>
        EDAM은 MADE를 거꾸로 나열한 것이며
        <br />
        순수 한글말로 이다음의 새로운 세상을 만들어 나가겠다는 의지가
        담겨있습니다.
        <br />
        <br />
        뻔한 생각을 뒤집어 시대를 뛰어넘는 새로운 엔터테인먼트 산업을 지향하며,
        <br />
        사랑받는 것을 넘어 사랑을 줄 수 있고
        <br />
        <br />
        꿈꾸는 것을 넘어 꿈을 실현할 수 있고
        <br />
        어떤 것보다 사람을 먼저 위하는
        <br />
        Global 엔터테인먼트 비즈니스를 선도하고 있습니다.
        <br />
        <br />
        그런 가치로운 곳이 이담이 될 수 있도록
        <br />
        이다음의 세상을 아름답게 메이드 하는 EDAM으로 발돋움할 것 입니다
      </Box>
      <Box>
        <CardMedia component="img" src="/img/widestage.jpg" />
      </Box>
    </>
  );
};
//about이담에서 박스에 사진이랑 같이 넣자

export default Intro;
