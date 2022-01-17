import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const container = makeStyles((theme) => ({
  root: {
    fontFamily: 'serif',

    overflow: 'hidden',
    textAlign: 'center',

    [theme.breakpoints.up('xs')]: {
      paddingTop: 100,
      paddingBottom: 55,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 0,
      '& h1': {
        position: 'absolute',
        top: '50%',
        margin: 0,
      },
    },
  },

  title: {
    position: 'relative',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: '#F5F5F5',
      width: '100%',
      fontSize: '23px',
      height: '500px',
    },
  },
  titleContainer: {
    paddingLeft: '10%',
    paddingRight: '10%',
    width: '100%',
  },

  artists: {
    display: 'flex',
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      marginTop: '35px',
    },
    [theme.breakpoints.up('md')]: {
      width: '60%',
      marginTop: '-80px',
      paddingBottom: '100px',
    },

    [theme.breakpoints.up('lg')]: {
      marginTop: '-80px',
    },
  },

  artistContainer: {
    display: 'table',
    width: '100%',
  },

  artist: {
    [theme.breakpoints.up('xs')]: {
      padding: 10,
      width: '50%',
      marginBottom: '10px',
      zIndex: 9999,
    },
    [theme.breakpoints.up(768)]: {
      display: 'table-cell',
      padding: 10,
      width: '250px',
      marginBottom: '10px',
    },
    [theme.breakpoints.up(900)]: {
      width: '350px',
    },
  },
}));
