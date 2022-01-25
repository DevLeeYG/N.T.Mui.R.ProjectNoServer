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
    padding: '30px',
    width: '100%',
    height: '100%',
    borderBottom: '1px solid #DDDDDD',
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
      fontSize: '25px',
      fontWeight: 700,
      marginBottom: '20px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '30px',
      fontWeight: 700,
      marginBottom: '20px',
    },
  },
  preview: {
    padding: 20,
    [theme.breakpoints.up('xs')]: {
      fontSize: '10px',
      color: `#818181`,
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '12px',
      color: `#818181`,
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '13px',
      color: `#818181`,
      width: '500px',
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
  YMD: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 15,
    paddingLeft: 8,
    paddingRight: 8,

    fontFamily: 'Roboto !important',
    color: '#777',

    margin: 0,

    width: '200px',

    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },

  Ym: {
    display: 'flex',
    fontSize: 70,
    textAlign: 'center',
    lineHeight: '60px',
    width: '100%',
    height: '50%',

    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
  Day: {
    display: 'flex',
    fontSize: 35,
    textAlign: 'center',
    lineHeight: '60px',
    width: '100%',
    height: '50%',

    [theme.breakpoints.up('xs')]: {
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      display: 'block',
    },
  },
}));
