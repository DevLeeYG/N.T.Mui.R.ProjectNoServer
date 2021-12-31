import React, { useState } from 'react';
import {CardMedia, AppBar, Box, Toolbar, Typography, IconButton ,Button} from '@mui/material';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import { dummy,  } from './HeadSource';



const HeadSapn = styled.span`
  margin-left: 10px;
  margin-right: 10px;
`;



const Header = () => {
  const [mouseHover, setMouseHover] = useState<Boolean>(false);

  const menu = dummy.map((el) => {
    return <HeadSapn>{el.text}</HeadSapn>;
  });

  return (
    <Box>
   <AppBar position="static">
        <Toolbar>
         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <CardMedia
          component="img"
          sx={{ width: 100 }}
         
          image="/img/sub-logo.png"
          alt="green iguana"
        />
          </Typography>
          <Button color="inherit">KOR</Button>
         
            <MenuIcon />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
