import React from 'react';

import styled from 'styled-components';
import Footer from './HMF/Footer';
import dynamic from 'next/dynamic';

const Head = dynamic(() => import('./HMF/Header'), {
  ssr: false,
});
const Foot = dynamic(() => import('./HMF/Footer'), {
  ssr: false,
});

const AppLayout = ({ children }: any) => {
  return (
    <div>
      <Head />
      {children}
      <Foot />
    </div>
  );
};

export default AppLayout;
