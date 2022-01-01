import React, { useState } from 'react';
import {
  CardMedia,
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  Button,
  useTheme,
  Menu,
  MenuItem,
  Fade,
  Paper,
  useMediaQuery,
} from '@mui/material';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { dummy } from './HeadSource';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@material-ui/core';
import { style } from './HeadSource';
import { useStyles } from './HeadSource';
import Link from 'next/link';
import Language from '../HeadDetail/Language';
import PopupState, { bindToggle, bindPopper } from 'material-ui-popup-state';
import Popper from '@mui/material/Popper';

const HeadSapn = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Header = () => {
  const [mouseHover, setMouseHover] = useState<Boolean>(false);
  const classes = useStyles();
  const menu = dummy.map((el) => {
    return <HeadSapn>{el.text}</HeadSapn>;
  });

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: 'fixed',
        color: 'white',
      }}
    >
      <AppBar sx={{ backgroundColor: 'transparent', p: 0.5, boxShadow: 0 }}>
        <Toolbar sx={{ width: '100%' }}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link passHref href="/">
              <a>
                <CardMedia
                  component="img"
                  sx={{ width: 80 }}
                  image="/img/sub-logo.png"
                  alt="stage"
                />
              </a>
            </Link>
          </Typography>
          <PopupState variant="popper">
            {(popupState) => (
              <div>
                <Button sx={{ color: 'white' }} {...bindToggle(popupState)}>
                  KOR{' '}
                  <ArrowDropDownIcon
                    sx={{
                      fontSize: '35px',
                      paddingBottom: '5px',
                    }}
                  />
                </Button>
                <Popper {...bindPopper(popupState)} transition>
                  {({ TransitionProps }) => (
                    <Fade {...TransitionProps} timeout={350}>
                      <Paper
                        sx={{
                          marginRight: 1.5,
                          borderRadius: '0px 0px 5px 5px',
                        }}
                      >
                        <Typography sx={{ p: 2 }}>ENG</Typography>
                        <Typography sx={{ p: 2 }}>CHN</Typography>
                      </Paper>
                    </Fade>
                  )}
                </Popper>
              </div>
            )}
          </PopupState>
          {/* <Typography sx={{ display: 'flex', lineHeight: '32px' }}>
            <Box>KOR</Box>
            <ArrowDropDownIcon
              sx={{
                fontSize: '35px',
                paddingBottom: '5px',
              }}
            />
          </Typography>
          <Language /> */}
          <MenuIcon
            sx={{
              width: '45px',
              height: '45px',
              paddingBottom: 0.5,
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
