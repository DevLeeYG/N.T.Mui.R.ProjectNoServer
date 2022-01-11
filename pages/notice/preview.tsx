/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../component/AppLayout';
import axios from 'axios';
import { BigBox, MiddleBox, SmallBox } from './noticeSource';
import Paging from '../../component/paginate/Pagination';
import { useRouter } from 'next/router';
import Link from 'next/link';
import DetailViewPage from './[page]';
const Preview = () => {
  const [page, setPage] = useState(1);
  console.log('123', page);
  const classes = BigBox();
  const middleB = MiddleBox();
  const noticeApi = `http://localhost:3000/api/notice/`;
  const smallB = SmallBox();
  type Data = {
    id: number;
    date: string;
    user: string;
    hit: number;
    title: string;
    post: string;
  }[];
  const [notice, setNotice] = useState<Data>([]);
  const [dataSize, setDataSize] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const sliceList = async () => {
      const data = await axios.get(
        `http://localhost:3000/api/notice/controller`,
      );

      setDataSize(data.data.count);
      setNotice(data.data.data);
    };
    sliceList();
  }, []);

  const datafetch: Promise<void> = async (id: any) => {
    const asdf = await axios
      .get(`http://localhost:3000/api/notice/${id}`)
      .catch((err) => console.log(err));
    console.log('asdf', asdf.data);
    <DetailViewPage data={asdf} />;
  };

  const a = notice.map((el, idx) => {
    const day = el.date.substr(0, 7);
    const yearMonth = el.date.substr(8);
    const preview = el.post.substr(0, 70);
    return (
      <Link href={`./${el.id}`}>
        <Box
          onClick={() => datafetch(el.id)}
          key={el.id}
          className={smallB.root}
        >
          <Box className={smallB.YMD}>
            <Box className={smallB.Ym}>{yearMonth}</Box>
            <Box className={smallB.Day}>{day}</Box>
          </Box>
          <Box>
            <Box className={smallB.title}>{el.title}</Box>
            <Box className={smallB.preview}>
              <Box>{preview}...</Box>
              <Box className={smallB.bottomBox}>
                <Box
                  sx={{ display: { md: 'none' } }}
                  className={smallB.bottomSolo}
                >
                  {el.date}
                </Box>
                <Box className={smallB.bottomSolo}>작성자:{el.user}</Box>
                <Box className={smallB.bottomSolo}>조화:{el.hit}</Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Link>
    );
  });

  return (
    <AppLayout>
      <Box className={classes.root}>
        <Box className={middleB.root}>
          {a}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Paging
              page={page}
              setPage={setPage}
              setNotice={setNotice}
              noticeApi={noticeApi}
              getAlldata={notice}
              dataSize={dataSize}
            />
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export default Preview;
