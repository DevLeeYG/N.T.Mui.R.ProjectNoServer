import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

type dummys = { id: number; text: string; path: string }[];
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
    path: '/',
  },
  {
    id: 1,
    text: 'NOTICE',
    path: '/notice/preview',
  },
  {
    id: 2,
    text: 'ARTISTS',
    path: '/artists',
  },
  {
    id: 3,
    text: 'madeEDAM',
    path: '/madeEdam',
  },
  {
    id: 4,
    text: 'AUDITION',
    path: '/audition',
  },
  {
    id: 5,
    text: 'CONTACT US',
    path: '/contact',
  },
];

export const sidebarlist: dummys = [
  {
    id: 0,
    text: 'EDAM',
    path: '/',
  },
  {
    id: 1,
    text: 'NOTICE',
    path: '/notice',
  },
  {
    id: 2,
    text: 'ARTISTS',
    path: '/artists',
  },
  {
    id: 3,
    text: 'madeEDAM',
    path: '/madeEdam',
  },
  {
    id: 4,
    text: 'AUDITION',
    path: 'audition',
  },
  {
    id: 5,
    text: 'CONTACT US',
    path: 'contact',
  },
];

export const HeaderStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: 'transparent',

    width: '100%',
    minHeight: '64px',

    [theme.breakpoints.up('sm')]: { padding: '30px 0px 30px 30px' },
    [theme.breakpoints.up('md')]: { margin: 0 },
  },
  root1: {
    backgroundColor: 'white',

    width: '100%',
    minHeight: '64px',

    [theme.breakpoints.up('sm')]: { padding: '30px 0px 30px 30px' },
    [theme.breakpoints.up('md')]: { margin: 0 },
  },
}));

export const Headerimg = makeStyles((theme) => ({
  root: {
    transition: '300ms',
    [theme.breakpoints.up('xs')]: { padding: '10px', width: 100 },
    [theme.breakpoints.up('sm')]: { padding: '13px', width: 130 },
    [theme.breakpoints.up('md')]: { padding: '15px', width: 150 },
  },
}));

export const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 4,
    transition: '500ms',
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
      paddingLeft: 10,
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

    padding: '50px',

    fontSize: '50px',

    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
    },
  },
  logo: {
    [theme.breakpoints.up('xs')]: {
      justifyContent: 'right',
      width: '80px',
      display: 'block',
    },
    [theme.breakpoints.up('sm')]: {
      justifyContent: 'right',
      width: '80px',
      display: 'none',
    },
    [theme.breakpoints.up('md')]: {
      justifyContent: 'right',
      width: '80px',
      display: 'none',
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
    fontSize: '15px',
    textAlign: 'center',
    marginBottom: '10px',
    color: 'white',
    [theme.breakpoints.up('sm')]: {
      textAlign: 'right',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',
    },
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
