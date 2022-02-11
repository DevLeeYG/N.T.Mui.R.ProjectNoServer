import { makeStyles } from '@material-ui/core';
import { keyframes } from '@mui/system';

export const container = makeStyles((theme) => ({
  '@keyframes EdamFont': {
    from: { opacity: 0, transform: 'translate3d(0,100%,0)' },
    to: { opacity: 1, transform: 'translateZ(0)' },
  },

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

    [theme.breakpoints.up('xs')]: {
      width: '100%',
      marginTop: '35px',
      paddingBottom: '100px',
    },
    [theme.breakpoints.up('md')]: {
      marginRight: 'auto',
      marginLeft: 'auto',
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
    [theme.breakpoints.up('xs')]: {
      color: 'white',
      width: '100%',
      position: 'relative',
      marginLeft: '10px',
      marginRight: '10px',
    },
    [theme.breakpoints.up(768)]: {
      width: '250px',
    },
    [theme.breakpoints.up('lg')]: {
      width: '350px',
    },
  },

  innerBox: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    backgroundColor: 'rgba(0,0, 0, 0.5)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },

  textbox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  artist: {
    display: 'flex',
    animation: `$EdamFont 0.8s`,
    height: '100%',
    marginBottom: '10px',

    [theme.breakpoints.up('lg')]: {
      width: '350px',
    },
  },
}));
