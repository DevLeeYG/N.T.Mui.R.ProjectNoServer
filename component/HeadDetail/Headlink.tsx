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
  fontSize: 12,
  marginLeft: 2.5,
  marginRight: 2.5,
  fontWeight: 800,
};

const Headlink = ({ setMouseHover }: any) => {
  const md = useMediaQuery('(max-width:1000px)');
  const router = useRouter();
  return (
    <div>
      {!md ? (
        <Box onMouseEnter={() => setMouseHover(false)} sx={{ display: 'flex' }}>
          <Typography sx={style}></Typography>

          <Link href="/aboutEdam">
            <Typography sx={style}>EDAM</Typography>
          </Link>

          <Link href="/notice/preview/1">
            <Typography sx={style}>NOTICE</Typography>
          </Link>
          <Link href="/artists">
            <Typography sx={style}>ARTISTS</Typography>
          </Link>
          <Typography sx={style}>madeEDAM</Typography>
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
