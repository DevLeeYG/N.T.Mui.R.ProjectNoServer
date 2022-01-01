import React from 'react';
import Header from './HMF/Header';
import styled from 'styled-components';
import Footer from './HMF/Footer';

const AppLayout = ({ children }: any) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AppLayout;
