import React, { useState } from 'react';
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
const HeadSapn = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Header = () => {
  const classes = HeaderStyle();
  const classesI = Headerimg();

  const menu = dummy.map((el) => {
    return <HeadSapn key={el.id}>{el.text}</HeadSapn>;
  });

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'fixed',
        color: 'white',
        zIndex: 5,
      }}
    >
      <AppBar sx={{ boxShadow: 0 }} className={classes.root}>
        <Toolbar
          sx={{
            width: '100%',
            paddingLeft: '24px',
            paddingRight: '24px',
            minHeight: '64px',
            margin: 0,
          }}
        >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link passHref href="/">
              <a>
                <CardMedia
                  className={classesI.root}
                  component="img"
                  image="/img/sub-logo.png"
                  alt="stage"
                />
              </a>
            </Link>
          </Typography>

          <div>
            <Box
              sx={{
                right: 50,
                top: 10,
                color: 'white',
                display: 'flex',
                fontSize: '20px',
                alignItems: 'center',
              }}
            >
              <Headlink />

              <ArrowDropDownIcon
                sx={{
                  fontSize: '2.5rem',
                }}
              />
            </Box>
          </div>

          <Sidebar />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
