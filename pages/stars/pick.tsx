import React from 'react';
import AppLayout from '../../component/AppLayout';
import Box from '@mui/material/Box';
import { useMediaQuery } from '@material-ui/core';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowForward } from 'react-icons/io';
import Avatarc from '../../component/Avararc';
function blinkingEffect() {
  return keyframes`
    100% {
      opacity: 0;
    }
  `;
}

const AnimatedComponent = styled.div`
  animation: ${blinkingEffect} 1s linear infinite;
`;

const Mother = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Middle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vh;
  height: 50vh;
`;

const Child = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 93vh;
  width: 50vh;
`;

const about = () => {
  const isXs = useMediaQuery('(max-width:768px)');
  const style = {};
  return (
    <div>
      <AppLayout>
        <Box
          display="flex"
          justifyContent="center"
          sx={{
            width: '100%',
          }}
        >
          <Mother>
            <AnimatedComponent>
              <IoIosArrowForward size="50" />
            </AnimatedComponent>
            <Child>
              <Avatarc />
            </Child>
          </Mother>
        </Box>
      </AppLayout>
    </div>
  );
};

export default about;
