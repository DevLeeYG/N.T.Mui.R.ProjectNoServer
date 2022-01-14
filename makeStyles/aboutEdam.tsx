import { makeStyles } from '@material-ui/core';

export const about = makeStyles((theme) => ({
  page: {
    [theme.breakpoints.up('xs')]: {
      paddingTop: '60px',
    },
  },

  intro: {
    fontFamily: 'Noto Sans KR',
    textAlign: 'center',
    paddingBottom: '46px',
    paddingTop: '46px',
    lineHeight: '24px',
    fontWeight: 350,
    width: '100%',
    height: '100%',
    color: 'rgb(51, 51, 51)',
    fontSize: '15px',
  },
  head: {
    width: '100%',
    height: '100%',
    textAlign: 'center',
    fontFamily: 'serif',
  },
  edam: {
    fontSize: '32px',
  },
  enter: {
    fontSize: '32px',
  },
}));
