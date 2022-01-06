import { Box } from '@mui/system';
import React from 'react';
import AppLayout from '../../component/AppLayout';
import Footer from '../../component/HMF/Footer';
import Header from '../../component/HMF/Header';
import Link from 'next/link';

const preview = () => {
  return (
    <AppLayout>
      <Box sx={{ width: '100%', height: '100vh' }}></Box>
    </AppLayout>
  );
};

export default preview;
