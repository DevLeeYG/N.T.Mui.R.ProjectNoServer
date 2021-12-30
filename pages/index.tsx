import { Box } from '@mui/system';
import type { NextPage } from 'next';
import Head from 'next/head';
import myPicture from '../img/myp.jpg';
import AppLayout from '../component/AppLayout';

import My from '../component/MainHome/My';
// const style = {
//   position: "absolute" as "absolute",
//   top: "50%",
//   left: "50%",
//   display: "flex",
//   transform: "translate(-50%, -50%)",
//   width: 350,
//   bgcolor: "white",

//   boxShadow: 24,
// };
const Home: NextPage = () => {
  return (
    <div>
      <AppLayout>
        <div>
          <My />
          <My />
        </div>
      </AppLayout>
    </div>
  );
};

export default Home;
