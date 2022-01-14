import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
const DetailViewPage = ({ data }: any) => {
  return <div>{JSON.stringify(data[0])}</div>;
};

export const getServerSideProps: GetServerSideProps = async (datas) => {
  const res = await axios.get(
    `http://localhost:3000/api/notice/detail/${datas.query.page}`,
  );

  const data = res.data;

  return { props: { data } };
};

export default DetailViewPage;
