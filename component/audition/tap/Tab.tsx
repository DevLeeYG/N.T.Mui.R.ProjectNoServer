import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Container, Box, Typography } from '@mui/material';
import { auditionTab } from '../../../makeStyles/audition';
import { withStyles } from '@material-ui/core/styles';
interface LinkTabProps {
  label?: string;
  href?: string;
}

const AuditionTab = () => {
  const classes = auditionTab();
  const [value, setValue] = useState(0);
  function LinkTab(props: LinkTabProps) {
    return (
      <Tab
        className={classes.detail}
        disableRipple
        component="a"
        onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
          event.preventDefault();
        }}
        {...props}
      />
    );
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={classes.MuiTab}>
      <Tabs
        textColor="inherit"
        TabIndicatorProps={{
          style: { background: 'black' },
        }}
        value={value}
        onChange={handleChange}
      >
        <LinkTab label="INFOMATION" />
        <LinkTab label="FAQ" />
      </Tabs>
    </Box>
  );
};

export default AuditionTab;
