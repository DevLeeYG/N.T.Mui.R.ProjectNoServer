import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const BigBox = makeStyles((theme) => ({
  root: {
    paddingTop: '100px',
    width: '100%',
    height: '100vh',

    [theme.breakpoints.up('xs')]: {},
  },
}));

export const MiddleBox = makeStyles((theme) => ({
  root: {
    borderTop: '5px solid black',
    [theme.breakpoints.up('sm')]: {},
  },
}));

export const SmallBox = makeStyles((theme) => ({
  root: {
    display: 'flex',
    background: 'yellow',
    padding: '30px',
    width: '100%',
    height: '100%',
    borderBottom: '1px solid',
    [theme.breakpoints.up('sm')]: {},
  },
  title: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '20px',
    },
  },
  preview: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      color: `#818181`,
    },
  },
  bottomBox: {
    [theme.breakpoints.up('xs')]: {
      marginTop: '30px',
      marginBottom: '5px',
      fontWeight: 200,
      display: 'flex',
      color: `#818181`,
    },
  },
  bottomSolo: {
    [theme.breakpoints.up('xs')]: {
      marginLeft: 6,
      marginRight: 6,
    },
  },
}));
