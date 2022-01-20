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
  },
}));
