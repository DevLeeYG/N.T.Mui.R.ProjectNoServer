import { makeStyles } from '@material-ui/core';

export const contactUs = makeStyles((theme) => ({
  Contactbox: {
    paddingTop: '140px',

    '& h1': {
      fontSize: '22px',
      marginBottom: '50px',
      fontFamily: 'serif',
    },
    '& dl': {
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
  },
}));
