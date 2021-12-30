import React, { useState } from 'react';
import { AppBar, Box, Toolbar, Typography, IconButton } from '@mui/material';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { dummy, style, style1 } from './HeadSource';
import Language from '../HeadDetail/Language';
// const style = {
//   display: 'flex',
//   height: '100%',
//   paddingLeft: '12px',
//   paddingRight: '10px',
// };

// const style1 = {
//   height: '110px',
//   width: '100%',
//   paddingTop: '45px',
//   flexGrow: 1,
//   display: 'flex',
//   alignItems: 'center',
// };
const Di = styled.div`
  background-color: transparent;
`;

const HeadSapn = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;

const Kor = styled.span`
  margin-left: 20px;
`;

const Header = () => {
  const [mouseHover, setMouseHover] = useState<Boolean>(false);

  const menu = dummy.map((el) => {
    return <HeadSapn>{el.text}</HeadSapn>;
  });

  return (
    <Di>
      <Box sx={style1}>
        <AppBar sx={style} position="static">
          <Toolbar
            sx={{
              width: '100%',
              backgroundColor: 'transparent',
              flexGrow: 1,
              display: 'flex',
            }}
            variant="dense"
          >
            <img src="/img/sub-logo.png" />
            <Typography width="100%" textAlign="right">
              {menu} | <Kor onMouseEnter={() => setMouseHover(true)}>KOR</Kor>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <div onMouseLeave={() => setMouseHover(false)}>
        {mouseHover ? <Language /> : null}
      </div>
    </Di>
  );
};

export default Header;
