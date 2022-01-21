import { makeStyles } from '@material-ui/core';

export const btn = makeStyles((theme) => ({
  root: {
    backgroundColor: 'black',
    color: 'white',
    height: '50px',
    marginTop: '40px',
    marginBottom: '40px',
    '&:hover': {
      backgroundColor: 'black',
    },
    [theme.breakpoints.up(1200)]: {
      width: '30%',
    },
  },
  container: {
    [theme.breakpoints.up(1200)]: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
    },
  },
}));
