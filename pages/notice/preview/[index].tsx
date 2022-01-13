/* eslint-disable @next/next/link-passhref */
/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import AppLayout from '../../../component/AppLayout';
import axios from 'axios';
import { BigBox, MiddleBox, SmallBox } from '../noticeSource';
import Pagination from 'react-js-pagination';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { GetServerSideProps } from 'next';

const preview = ({ getList, sliceList }: any) => {
  const router = useRouter();
  const [page, setPage] = useState(getList.query);

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
  const [notice, setNotice] = useState<Data>(getList.data);
  const [dataSize, setDataSize] = useState<number>(getList.count);
  const handlePageChange = async (page: any) => {
    console.log('page', page);
    const res = await axios.get(`http://localhost:3000/api/notice/${page}`);

    router.push(`/notice/preview/${page}`);
    setPage(page);
    setDataSize(res.data.count);
    setNotice(res.data.data);
  };

  useEffect(
    (page) => {
      handlePageChange(page);
    },
    [page],
  );

  const a = notice.map((el, idx) => {
    const day = el.date.substr(0, 7);
    const yearMonth = el.date.substr(8);
    const preview = el.post.substr(0, 70);
    return (
      // eslint-disable-next-line react/jsx-key
      <Link href={`/notice/detail/${el.id}`}>
        <Box key={el.id} className={smallB.root}>
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
            <button onClick={() => router.push('/notice/preview/3')}>
              3번
            </button>
            <Pagination
              activePage={page}
              itemsCountPerPage={3} //한화면에 나오는 카운트
              totalItemsCount={dataSize} //총 갯수
              pageRangeDisplayed={Math.ceil(dataSize / 3)} //페이지 표시 갯수
              prevPageText={'‹'}
              nextPageText={'›'}
              onChange={handlePageChange}
            />
          </Box>
        </Box>
      </Box>
    </AppLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (datas) => {
  const res = await axios.get(
    `http://localhost:3000/api/notice/${datas.query.index}`,
  );

  const getList = res.data;

  console.log('123123123', getList);
  return { props: { getList } };
};

export default preview;
{
  /* <Paging
              page={page}
              setPage={setPage}
              setNotice={setNotice}
              noticeApi={noticeApi}
              getAlldata={notice}
              dataSize={dataSize}
            /> */
}
