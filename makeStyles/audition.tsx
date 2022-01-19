import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const audition = makeStyles((theme) => ({
  container: {
    paddingLeft: '15px',
    paddingRight: '15px',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '140px',
    },
  },
  mainBox: {
    [theme.breakpoints.up('xs')]: {
      backgroundColor: '#cfe8fc',
      width: '100%',
      height: '100vh',
    },
  },
  introBox: {
    paddingLeft: '0px',
    paddingRight: '0px',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      fontFamily: 'serif',

      marginTop: 0,
      '& h1': {
        fontSize: '22px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '14px',
        fontWeight: 350,
        lineHeight: '22px',
      },
    },
  },
}));

export const auditionInfo = makeStyles((theme) => ({
  info: {
    [theme.breakpoints.up('xs')]: {
      padding: 0,
    },
  },
}));
