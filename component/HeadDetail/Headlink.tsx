import React, { useState } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useRouter } from 'next/router';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import Link from 'next/link';

const style = {
  fontSize: 15,
  marginLeft: 3,
  marginRight: 3,
  fontWeight: 800,
};

console.log(style.marginLeft);

const Headlink = ({ setMouseHover }: any) => {
  const md = useMediaQuery('(max-width:1000px)');
  const router = useRouter();
  return (
    <div>
      {!md ? (
        <Box onMouseEnter={() => setMouseHover(false)} sx={{ display: 'flex' }}>
          <Typography sx={style}></Typography>

          <Link href="/notice/preview">
            <a>
              <Typography sx={style}>NOTICE</Typography>
            </a>
          </Link>

          <Typography sx={style}>madEDAM</Typography>
          <Typography sx={style}>AUDITION</Typography>
          <Typography sx={style}>CONTACT US</Typography>
          <Box sx={style}> | </Box>
        </Box>
      ) : null}
    </div>
  );
};

export default Headlink;

/**
 * 헤드 컴포넌트를 검정색으로 바꾸려면 어떻게 해야할까?
 * 호스트주소와 현재 주소 비교
 */
