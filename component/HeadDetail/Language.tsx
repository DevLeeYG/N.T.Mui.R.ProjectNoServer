import React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
`;

const Language = () => {
  return (
    <Div>
      <Paper sx={{ width: 100 }}>
        <MenuList>
          <MenuItem>ENG</MenuItem>
          <MenuItem>CHINA</MenuItem>
        </MenuList>
      </Paper>
    </Div>
  );
};

export default Language;
