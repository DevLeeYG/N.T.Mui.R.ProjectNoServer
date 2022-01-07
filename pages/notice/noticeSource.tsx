import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const BigBox = makeStyles((theme) => ({
  root: {
    paddingTop: '100px',
    width: '100%',
    height: '100%',

    [theme.breakpoints.up('sm')]: {
      paddingTop: '150px',
    },
    [theme.breakpoints.up('lg')]: {
      paddingTop: '200px',
    },
  },
}));

export const MiddleBox = makeStyles((theme) => ({
  root: {
    borderTop: '5px solid black',
    [theme.breakpoints.up('sm')]: {
      width: '80%',
      marginLeft: '10%',
      marginRight: '10%',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      marginLeft: '20%',
      marginRight: '20%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '60%',
    },
    [theme.breakpoints.up('xl')]: {
      maxWidth: '1310px',
      marginLeft: '20%',
    },
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
    [theme.breakpoints.up('sm')]: {
      paddingRight: '15px',
      paddingLeft: `15px`,
      marginRight: `auto`,
      marginLeft: `auto`,
    },
    [theme.breakpoints.up('md')]: {
      paddingRight: '50px',
      paddingLeft: `50px`,
      marginRight: `auto`,
      marginLeft: `auto`,
    },
  },
  title: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      fontWeight: 700,
      marginBottom: '20px',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '30px',
      fontWeight: 700,
      marginBottom: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '40px',
      fontWeight: 700,
      marginBottom: '20px',
    },
  },
  preview: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
      color: `#818181`,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '20px',
      color: `#818181`,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '30px',
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
