import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const container = makeStyles((theme) => ({
  root: {
    fontFamily: 'serif',
    marginLeft: 'auto',
    marginRigth: 'auto',
    overflow: 'hidden',

    [theme.breakpoints.up('xs')]: {
      paddingTop: 100,
      paddingBottom: 55,
    },
    [theme.breakpoints.up('md')]: {
      paddingTop: 0,
      paddingBottom: 0,
    },
  },
  titleContainer: {
    display: 'flex',
    width: '100%',
    fontFamily: 'serif',
    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.up('xs')]: {
      marginTop: '100px',

      justifyContent: 'center',
    },
    [theme.breakpoints.up('md')]: {
      width: '1000px',
      marginTop: '-80px',
      paddingBottom: '100px',
      justifyContent: 'left',
    },

    [theme.breakpoints.up('lg')]: {
      width: '1350px',
      marginTop: '-80px',
    },
  },

  title: {
    display: 'flex',

    position: 'relative',

    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
    [theme.breakpoints.up('md')]: {
      fontSize: '20px',

      height: '400px',
      '& h1': {
        paddingLeft: '15px',
        position: 'absolute',
        top: '70%',

        margin: '0px',
      },
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: '25px',
    },
  },

  artistContainer: {
    display: 'flex',

    [theme.breakpoints.up('md')]: { backgroundColor: '#F5F5F5' },
  },

  artists: {
    display: 'flex',

    marginRight: 'auto',
    marginLeft: 'auto',
    [theme.breakpoints.up('xs')]: {
      width: '100%',
      marginTop: '35px',
      paddingBottom: '100px',
    },
    [theme.breakpoints.up('md')]: {
      width: '1000px',
      marginTop: '-80px',
      paddingBottom: '100px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '1350px',
      marginTop: '-80px',
    },
  },

  containerBox: {
    color: 'white',
    position: 'relative',
    paddingLeft: '10px',
    paddingRight: '10px',

    '&:hover': {
      filter: 'brightness(0.30)',

      zIndex: 0,
    },
  },

  innerBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    color: 'white',
    zIndex: 2,
    textShadow: '-2px -1px 8px rgba(255, 255, 255, 1)',
  },

  artist: {
    display: 'flex',
    height: '100%',
    marginBottom: '10px',

    [theme.breakpoints.up('lg')]: {
      width: '350px',
    },

    [theme.breakpoints.up('lg')]: {
      width: '350px',
    },
  },
}));
