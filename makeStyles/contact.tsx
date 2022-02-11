import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';
export const contactUs = makeStyles((theme) => ({
  '@keyframes contact': {
    '0%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '30%': {
      opacity: 0,
      transform: 'translate3d(0,100%,0)',
    },
    '100%': {
      opecity: 1,
      transform: 'translateZ(0)',
    },
  },
  Contactbox: {
    background: 'white',
    width: '100%',
    height: '100%',
    paddingTop: '140px',

    '& h1': {
      animation: '$contact 0.7s',
      fontSize: '22px',
      marginBottom: '50px',
      fontFamily: 'serif',
    },
    '& dl': {
      animation: '$contact 1.4s',
      marginBottom: '10px',
    },
    '& dt': {
      fontSize: '16px',
      fontWeight: 'bold',
    },
    '& dd': {
      lineHeight: '37px',
      fontSize: '14px',
      fontWeight: 300,
    },
    [theme.breakpoints.up(768)]: {
      '& h1': {
        fontSize: '30px',
      },
      '& dt': {
        marginBottom: '15px',
      },
      '& dd': {
        marginBottom: '15px',
      },
    },
    [theme.breakpoints.up(993)]: {
      '& h1': {
        fontSize: '50px',
      },
      '& dt': {
        marginBottom: '17px',
      },
      '& dd': {
        marginBottom: '17px',
      },
    },
    [theme.breakpoints.up(1200)]: {
      width: '1310px',
      '& h1': {
        fontSize: '60px',
      },
      '& dt': {
        marginBottom: '20px',
      },
      '& dd': {
        marginBottom: '20px',
      },
    },
  },

  QnTBox: {
    width: '100%',
    animation: '$contact 2.1s',
    marginTop: '60px',
    marginBottom: '50px',
    [theme.breakpoints.up(993)]: {
      display: 'flex',
      marginBottom: '100px',
    },
  },
  QnTMiddleBox: {
    padding: '0 15px',
    overflow: 'hidden',
    marginBottom: '15px',
    [theme.breakpoints.up(993)]: {
      width: '33.3%',
    },
  },
  MailBox: {
    backgroundColor: '#f3f3f3',
    padding: '100px 30px',
  },
  Icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Icon: {
    fontSize: '16px',
  },
  qnt: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '16px',
    fontWeight: 'bold',
    marginTop: '10px',
    marginBottom: '10px',
  },
  mail: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    fontWeight: 300,
    color: '#666666',
  },
}));
