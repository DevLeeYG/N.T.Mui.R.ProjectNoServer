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
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      fontFamily: 'serif',
      marginBottom: '50px',
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

  dash: {
    position: 'relative',
    paddingLeft: '15px',
    '& p::before': {
      position: 'absolute',
      content: "'-' ",
      top: 0,
      left: 0,
    },
  },
  bold: {
    '& p': {
      fontWeight: 'bold',
    },
  },
  infobox: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.up('xs')]: {
      fontSize: '18px',
      fontWeight: 700,

      '& dl': {
        marginTop: '0px',
      },
      '& span': {
        marginBottom: 30,
        fontSize: '17px',
        fontWeight: 800,
      },
      marginBottom: '15px',
      '& dt': {
        lineHeight: '35.4px',
        fontSize: '15px',
        fontWeight: 700,
      },
      '& p': {
        fontFamily: 'Noto Sans KR',
        marginTop: '0px',
        marginBottom: '0px',
        lineHeight: '22.4px',
        fontSize: '14px',
        fontWeight: 'lighter',
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

export const auditionTab = makeStyles((theme) => ({
  MuiTab: {
    display: 'flex',

    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '40px',
    },
  },
  detail: {
    width: '184px',
  },
}));
