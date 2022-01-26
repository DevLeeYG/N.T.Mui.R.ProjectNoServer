import React, { useCallback, useEffect, useState } from 'react';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  Paper,
} from '@mui/material';
import styled from 'styled-components';
import { dummy } from './HeadSource';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useStyles } from './HeadSource';
import Link from 'next/link';
import Sidebar from '../HeadDetail/Sidebar';
import { HeaderStyle, Headerimg } from './HeadSource';
import Headlink from '../HeadDetail/Headlink';
import { useRouter } from 'next/router';
import { isClassExpression } from 'typescript';
const HeadSapn = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Header = () => {
  let style = {
    right: 50,
    top: 10,
    color: 'white',
    display: 'flex',
    fontSize: '20px',
    alignItems: 'center',
  };
  const router = useRouter();
  const href = () => {
    if (window.location.pathname.length > 1) {
      style.color = 'black';
    } else {
      return;
    }
  };
  href();

  const [mouseHover, setMouseHover] = useState<Boolean>(false);

  const classes = HeaderStyle();
  const classesI = Headerimg();

  return (
    <Box>
      <AppBar
        sx={{ boxShadow: 0 }}
        className={router.asPath === '/' ? classes.root : classes.root1}
      >
        <Toolbar>
          <CardMedia
            onClick={() => router.push('/')}
            className={classesI.root}
            component="img"
            image="/img/sub-logo.png"
            alt="stage"
          />

          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          ></Typography>

          <div>
            <Box sx={style}>
              <Headlink setMouseHover={setMouseHover} />
              <Typography onClick={() => setMouseHover(!mouseHover)}>
                KOR
              </Typography>
              <ArrowDropDownIcon
                sx={{
                  fontSize: '2.5rem',
                }}
              />
            </Box>

            {mouseHover ? (
              <Paper
                onMouseLeave={() => setMouseHover(false)}
                sx={{
                  position: 'absolute',
                  top: '64px',
                  right: 50,
                  marginRight: 1.5,
                  borderRadius: '0px 0px 5px 5px',
                }}
              >
                <Typography sx={{ p: 2 }}>ENG</Typography>
                <Typography sx={{ p: 2 }}>CHN</Typography>
              </Paper>
            ) : null}
          </div>

          <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
