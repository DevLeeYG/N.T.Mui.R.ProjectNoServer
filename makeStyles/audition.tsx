import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const audition = makeStyles((theme) => ({
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  tie: {
    animation: '$myEffect 2s',
  },
  container: {
    background: 'white',
    paddingLeft: '15px',
    paddingRight: '15px',
    [theme.breakpoints.up('xs')]: {
      paddingTop: '140px',
    },
    [theme.breakpoints.up(768)]: {
      paddingTop: '180px',
      width: '786px',
    },
    [theme.breakpoints.up(992)]: {
      paddingTop: '180px',
      width: '1100px',
    },
    [theme.breakpoints.up(1200)]: {
      paddingTop: '180px',
      width: '1180px',
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
    background: 'white',
    wordBreak: 'keep-all',
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      fontFamily: 'serif',
      marginBottom: '45px',
      marginTop: 0,
      '& h1': {
        animation: `$myEffect 1s `,
        fontSize: '22px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        animation: `$myEffect 2s `,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '14px',
        fontWeight: 350,
        lineHeight: '22px',
      },
    },
    [theme.breakpoints.up(768)]: {
      '& h1': {
        fontSize: '30px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '14px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
    [theme.breakpoints.up(993)]: {
      '& h1': {
        fontSize: '40px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '16px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
    [theme.breakpoints.up(1200)]: {
      '& h1': {
        fontSize: '50px',
        marginTop: 0,
        marginBottom: '40px',
      },
      '& p': {
        margin: 0,
        color: '#757575',
        fontFamily: 'nato sans KR',
        fontSize: '17px',
        fontWeight: 350,
        lineHeight: '28px',
        wordBreak: 'keep-all',
      },
    },
  },
  blockbr: {
    [theme.breakpoints.up(768)]: {
      display: 'none',
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
        marginTop: '0px',
        marginBottom: '0px',

        fontSize: '15px',
        fontWeight: 'lighter',
      },
    },
    [theme.breakpoints.up(993)]: {
      fontSize: '21px',
    },
    '& dt': {
      fontSize: '16px',
    },
    '& p': {
      fontSize: '16px',
    },
  },
  textflex: {
    [theme.breakpoints.up(768)]: {
      display: 'flex',
      alignItems: 'center',
      '& dt ': {
        width: '80px',
      },
    },
  },
  HowToApply: {
    display: 'flex',
    [theme.breakpoints.up(768)]: {
      display: 'flex',
      width: '80px',
      height: '117px',
      verticalAlign: 'top',
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
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },

  info: {
    background: 'white',
    [theme.breakpoints.up('xs')]: {
      padding: 0,
    },
    [theme.breakpoints.up(768)]: {
      marginLeft: 'auto',
      marginRight: 'auto',

      padding: '15px',
    },
  },
}));

export const auditionTab = makeStyles((theme) => ({
  '@keyframes myEffect': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    // '75%': {
    //   opacity: 0,
    //   transform: 'translate3d(0,100%,0)',
    // },
    '100%': {
      opacity: 1,
      transform: 'translateZ(0)',
    },
  },
  MuiTab: {
    display: 'flex',
    background: 'white',
    justifyContent: 'center',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginBottom: '40px',
    },
  },
  detail: {
    width: '184px',
    [theme.breakpoints.up(993)]: {
      fontSize: '20px',
    },
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
  resumes: {
    display: 'flex',
  },
  circleText2: {
    lineHeight: '40px',
    textAlign: 'center',
    paddingTop: '0px',
    width: '100%',
    marginBottom: '4px',
  },
  aor: {
    padding: '0px',
    margin: '0px',

    [theme.breakpoints.up(992)]: {
      display: 'flex',

      width: '100%',
    },
  },
  singer: {
    height: 'auto',

    color: '#333',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '44px',
    [theme.breakpoints.up(768)]: {
      width: '100%',
    },

    [theme.breakpoints.up(993)]: {
      width: '500px',
      height: '370px',
    },
    [theme.breakpoints.up(1200)]: {
      width: '550px',
      height: '420px',
    },
  },
  actor: {
    height: 'auto',
    margin: '0px',
    color: '#333',
    borderRadius: '2px',
    backgroundColor: '#F3F3F3',
    padding: '44px',
    [theme.breakpoints.up(768)]: { width: '100%' },
    [theme.breakpoints.up(993)]: {
      width: '500px',
      height: '370px',
    },
    [theme.breakpoints.up(1200)]: {
      width: '550px',
      height: '420px',
    },
  },
  singerBox: {
    width: '100%',
    [theme.breakpoints.up(993)]: {},
  },
  actorBox: {
    [theme.breakpoints.up(993)]: {},
  },

  // singActorFlex: {
  //   display: 'flex',
  // },
  singerActorTitle: {
    [theme.breakpoints.up('xs')]: {
      textAlign: 'center',
      width: '100%',
      fontSize: '17px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    [theme.breakpoints.up(993)]: {
      fontSize: '20px',
    },
  },

  notice: {
    paddingLeft: '30px',
    paddingRight: '30px',

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
