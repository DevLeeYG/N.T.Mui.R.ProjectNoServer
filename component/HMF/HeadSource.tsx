import { makeStyles } from '@material-ui/core';

type dummys = { id: number; text: string }[];

export const dummy: dummys = [
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

export const sidebarlist: dummys = [
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

export const HeaderStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',

    width: '100%',
    minHeight: '64px',
    [theme.breakpoints.up('xs')]: {},
    [theme.breakpoints.up('sm')]: { padding: '35px' },
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
}));

export const Headerimg = makeStyles((theme) => ({
  root: {
    width: 80,
    transition: '300ms',
    [theme.breakpoints.up('xs')]: {},
    [theme.breakpoints.up('sm')]: { padding: '20px', width: 200 },
    [theme.breakpoints.up('md')]: {},
    [theme.breakpoints.up('lg')]: {},
    [theme.breakpoints.up('xl')]: {},
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 4,
    [theme.breakpoints.up('xs')]: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      height: '100vh',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      right: '0%',
      width: '570',
      maxWidth: '600px',
      height: '510px',
    },
    [theme.breakpoints.up('md')]: {
      width: '800px',

      height: '600px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '1100px',
      maxWidth: '1200px',
      height: '800px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '70%',

      height: '70%',
    },
  },
}));

export const fontStyle = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: 5,
    top: '37%',
    color: 'white',

    p: '0px 15px 0px 15px',

    overflow: 'hidden',
    backgroundColor: 'transparent',

    [theme.breakpoints.up('xs')]: {
      fontSize: '30px',
      top: '40%',
      color: 'white',

      paddingLeft: 30,
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      fontSize: '40px',
      top: '28%',
      color: 'white',

      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '50px',
      paddingLeft: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '60px',
      paddingLeft: '400px',
    },
    [theme.breakpoints.up('xl')]: {
      position: 'absolute',
      top: '30%',
      right: '35%',
      width: '1300px',

      fontSize: '60px',
    },
  },
}));

export const FooterStyle = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      display: 'none',
      position: 'absolute',
      overflow: 'hidden',

      right: '8%',
    },
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
      position: 'absolute',
      overflow: 'hidden',
      bottom: '0%',
    },
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      position: 'absolute',
      width: '900px',
      left: '-3%',
    },
    [theme.breakpoints.up('lg')]: {
      bottom: '10%',

      fontSize: '60px',
    },
    [theme.breakpoints.up('xl')]: {},
  },
}));

export const Foot = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: '#121212',

    justifyContent: 'center',
    padding: '30px',
    fontSize: '50px',

    [theme.breakpoints.up('xs')]: {},
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
  },
}));

export const Footsns = makeStyles((theme) => ({
  root: {
    display: 'flex',

    justifyContent: 'center',
    marginBottom: '10px',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
  },
}));

export const Sns = makeStyles((theme) => ({
  root: {
    width: '30px',

    [theme.breakpoints.up('sm')]: {
      width: '50px',
    },
    [theme.breakpoints.up('md')]: {
      width: '30px',
    },
  },
}));

export const Text = makeStyles((theme) => ({
  root: {
    textAlign: 'center',

    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
    [theme.breakpoints.up('md')]: {},
  },
}));
