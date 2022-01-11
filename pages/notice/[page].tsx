import axios from 'axios';

const DetailViewPage = ({ data }: any) => {
  console.log('!!!!!', data);
  return <div>{data}</div>;
};

// DetailViewPage.getServersideProps = async (props: any) => {
//   const { data } = await axios.get(
//     `http://localhost:3000/api/notice/controller/${props.query['page']}`,
//   );
//   console.log(data);

//   return { data };
// };

export default DetailViewPage;
