import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';
import { styled } from '@mui/material/styles';
type dummys = { id: number; text: string }[];
const BtoU = keyframes`
  from {
    opacity: 0;
            transform: translate3d(0, 100%, 0);
  }
  to {
    opacity: 1;
            transform: translateZ(0);
  }
`;

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

    [theme.breakpoints.up('sm')]: { padding: '35px' },
  },
}));

export const Headerimg = makeStyles((theme) => ({
  root: {
    width: 80,
    transition: '300ms',

    [theme.breakpoints.up('sm')]: { padding: '20px', width: 200 },
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
      height: '700px',
    },
    [theme.breakpoints.up('xl')]: {
      width: '1200px',
      overflow: 'hidden',
      height: '800px',
    },
  },
}));

export const fontStyle = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    zIndex: 5,
    top: '37%',
    color: 'white',
    fontSize: '30px',
    p: '0px 15px 0px 15px',
    fontFamily: 'serif',
    backgroundColor: 'transparent',

    [theme.breakpoints.up('xs')]: {
      top: '37%',
      color: 'white',
      fontSize: '60px',
      paddingLeft: 50,
      animation: `${BtoU}  0.5s linear `,
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('sm')]: {
      position: 'absolute',
      fontSize: '80px',
      top: '28%',
      color: 'white',

      width: '100%',
      overflow: 'hidden',
      backgroundColor: 'transparent',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '90px',
      paddingLeft: '200px',
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '100px',
      paddingLeft: '80px',
    },
    [theme.breakpoints.up('xl')]: {
      position: 'absolute',
      top: '30%',
      paddingLeft: '170px',
      width: '1300px',

      fontSize: '120px',
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

export const Edam = makeStyles((theme) => ({
  '@keyframes EdamFont': {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },
  '@keyframes EntFont': {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },

  root: {
    marginBottom: 0,
    marginTop: 0,

    [theme.breakpoints.up('xs')]: {
      animation: '$EdamFont 2s',
    },
    [theme.breakpoints.up('sm')]: {
      animation: '$EntFont 2s',
    },
    [theme.breakpoints.up('md')]: {
      animation: '$EdamFont 2s',
    },
    [theme.breakpoints.up('lg')]: {
      animation: '$EntFont 2s',
    },
    [theme.breakpoints.up('xl')]: {
      animation: '$EdamFont 2s',
    },
  },
  root1: {
    marginBottom: 0,
    marginTop: 0,

    [theme.breakpoints.up('xs')]: {
      animation: '$EdamFont 3s',
    },
    [theme.breakpoints.up('sm')]: {
      animation: '$EntFont 3s',
    },
    [theme.breakpoints.up('md')]: {
      animation: '$EdamFont 3s',
    },
    [theme.breakpoints.up('lg')]: {
      animation: '$EntFont 3s',
    },
    [theme.breakpoints.up('xl')]: {
      animation: '$EdamFont 3s',
    },
  },
}));
