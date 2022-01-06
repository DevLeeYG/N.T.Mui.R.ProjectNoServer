import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Typography from '@mui/material/Typography';
import AppLayout from '../component/AppLayout';
import Footer from '../component/HMF/Footer';
import Main from '../component/HMF/Main';
import EdamEnt from '../component/HeadDetail/EdamEnt';
import Footerimg from '../component/HeadDetail/Footerimg';
import { useSelector } from 'react-redux';
const Home: NextPage = () => {
  return (
    <div>
      <AppLayout>
        <Main />
        <EdamEnt />
        <Footerimg />
      </AppLayout>
    </div>
  );
};

export default Home;
