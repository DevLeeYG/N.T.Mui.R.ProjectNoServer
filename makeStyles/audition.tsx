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
      height: '100%',
    },
  },
  introBox: {
    wordBreak: 'keep-all',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      fontFamily: 'serif',
      marginBottom: '45px',
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
  star: {
    position: 'relative',
    paddingLeft: '15px',
    fontWeight: 300,
    '& p::before': {
      position: 'absolute',
      content: "'*' ",
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
    wordBreak: 'keep-all',
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
      marginBottom: '40px',
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
  noticeBox: {
    paddingTop: '50px',
    borderTop: '1px solid #dadada',
    wordBreak: 'keep-all',
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
      marginBottom: '40px',
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

export const process = makeStyles((theme) => ({
  root: {
    [theme.breakpoints.up('xs')]: {
      marginBottom: '20px',
    },
  },
  part: {
    marginBottom: '15px',
  },
  process: {
    [theme.breakpoints.up('xs')]: {
      fontSize: '17px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
  },
  processingBox: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    color: '#333',
    height: '100%',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '10px 15px 10px 15px',

    zIndex: 1,
    [theme.breakpoints.up(768)]: {
      display: 'flex',
    },
    [theme.breakpoints.up(993)]: {
      display: 'flex',
    },
  },
  line: {
    display: 'none',
    border: '1px solid #DADADA',
    width: '80%',
    height: '0.5px',
    backgroundColor: 'black',
    position: 'absolute',
    top: '47%',
    left: '10%',
    [theme.breakpoints.up(768)]: {
      display: 'block',
    },
    [theme.breakpoints.up(993)]: {
      display: 'block',
    },
  },
  circle: {
    borderRadius: '50%',
    textAlign: 'center',
    backgroundColor: 'white',
    width: '110px',
    height: '110px',
    [theme.breakpoints.up('xs')]: {
      margin: '40px auto 50px auto',
    },
    [theme.breakpoints.up(993)]: {
      width: '125px',
      height: '125px',
    },
  },

  wideCircle: {
    borderRadius: '25px',
    textAlign: 'center',
    backgroundColor: 'black',
    width: '85px',
    color: 'white',
    height: '30px',

    [theme.breakpoints.up('xs')]: {
      margin: 'auto',
      marginTop: '30px',
      width: '90px',
      height: '45px',
    },
    [theme.breakpoints.up(768)]: {
      margin: 'auto',
      marginTop: '30px',
      marginLeft: '50px',
      marginRight: '50px',
      width: '90px',
      height: '45px',
    },
    [theme.breakpoints.up(993)]: {
      marginLeft: '100px',
      marginRight: '100px',
    },
  },

  textBox: {
    margin: '25px auto 25px auto',
  },

  circleText: {
    textAlign: 'center',
    paddingTop: '0px',
    width: '100%',
    [theme.breakpoints.up(993)]: {
      fontSize: '16px',
    },
  },
  circleText2: {
    lineHeight: '40px',
    textAlign: 'center',
    paddingTop: '0px',
    width: '100%',
    marginBottom: '4px',
  },

  singer: {
    width: '100%',
    height: 'auto',
    color: '#333',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '30px 10px 30px 10px',
  },

  singerActorTitle: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      width: '100%',
      fontSize: '17px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
  },

  notice: {
    paddingLeft: '30px',

    position: 'relative',
    '& p': {
      fontSize: '14px',
      fontWeight: 300,
    },
    '& p::before': {
      paddingLeft: '15px',
      position: 'absolute',
      content: "'-'",
      top: 0,
      left: 0,
    },
  },
  check: {
    paddingLeft: '15px',
    wordBreak: 'keep-all',
    position: 'relative',
    '& p': {
      fontSize: '14px',
      fontWeight: 'bold',
    },
    '& p::before': {
      position: 'absolute',
      content: "'v'",
      top: 0,
      left: 0,
    },
  },
  plus: {
    paddingLeft: '30px',
    wordBreak: 'keep-all',
    position: 'relative',
    '& p': {
      fontWeight: 300,
      fontSize: '14px',
    },
    '& p::before': {
      paddingLeft: '15px',
      position: 'absolute',
      content: "'+'",
      top: 0,
      left: 0,
    },
  },
}));