import React, { useState } from 'react';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@material-ui/core';

export const dummy = [
  {
    id: 0,
    text: 'EDAM',
  },
  {
    id: 1,
    text: 'NOTICE',
  },
  {
    id: 2,
    text: 'ARTISTS',
  },
  {
    id: 3,
    text: 'madeEDAM',
  },
  {
    id: 4,
    text: 'AUDITION',
  },
  {
    id: 5,
    text: 'CONTACT US',
  },
];

export const sidebarlist = [
  {
    id: 0,
    text: 'EDAM',
  },
  {
    id: 1,
    text: 'NOTICE',
  },
  {
    id: 2,
    text: 'ARTISTS',
  },
  {
    id: 3,
    text: 'madeEDAM',
  },
  {
    id: 4,
    text: 'AUDITION',
  },
  {
    id: 5,
    text: 'CONTACT US',
  },
];

export const style = {
  display: 'flex',
  width: '100%',
  zIndex: 9999,
  backgroundColor: 'transparent',
  boxShadow: 0,
  justifyContent: 'space-between',
  paddingLeft: '12px',
  paddingRight: '10px',
};

export const useStyles = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: 'black',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: 'green',
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'orange',
    },
    [theme.breakpoints.up('xl')]: {
      backgroundColor: 'cyan',
    },
  },
}));
