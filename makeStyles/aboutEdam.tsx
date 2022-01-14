import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

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

export const about = makeStyles((theme) => ({
  '@keyframes AboutFont': {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },

  page: {
    [theme.breakpoints.up('xs')]: {
      paddingTop: '12%',
    },
    [theme.breakpoints.up('sm')]: {
      paddingTop: '12%',
    },
  },

  intro: {
    fontFamily: 'Noto Sans KR',
    textAlign: 'center',
    paddingBottom: '46px',
    paddingTop: '46px',
    lineHeight: '27px',
    fontWeight: 350,
    width: '100%',
    height: '100%',
    color: 'rgb(51, 51, 51)',
    fontSize: '15px',
    animation: '$AboutFont 1s',
    [theme.breakpoints.up('xs')]: {
      marginTop: '30px',
      marginBottom: '60px',
    },
    [theme.breakpoints.up('md')]: {
      marginTop: '30px',
      marginBottom: '60px',
    },
  },
  head: {
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      height: '100%',
      textAlign: 'center',
      fontFamily: 'serif',
      animation: '$AboutFont 1s',
    },
  },
  edam: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '32px',
      animation: '$AboutFont 1s',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '60px',
    },
  },
  enter: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '32px',
      animation: '$AboutFont 1.5s',
    },
    [theme.breakpoints.up('sm')]: {
      fontSize: '45px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '60px',
    },
  },
}));
