import React from 'react';
import AppLayout from '../component/AppLayout';
import Box, { BoxProps } from '@mui/material/Box';

import styled from 'styled-components';

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

const Div = styled.div`
  display: flex;

  width: '100%';
  height: 93vh;
  @media ${device.tablet} {
    flex-direction: column;
    width: 100%;
  }
`;

const Item = (props: BoxProps) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        bgcolor: 'primary.main',
        color: 'black',
        width: '98%',
        height: 500,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
        fontSize: '1rem',
        fontWeight: '700',

        ...sx,
      }}
      {...other}
    />
  );
};

const journal = () => {
  return (
    <>
      <AppLayout>
        <Div>
          <Item>1</Item>
          <Item>1</Item>
        </Div>
      </AppLayout>
    </>
  );
};

export default journal;
