// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  id: number;
  date: Date | string | number;
  user: string;
  hit: number;
  title: string;
  post: string;
}[];
function dateFormat(date: any) {
  let month = date.getMonth() + 1;
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '-' + month + '-' + day;
}
let today = new Date();
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json([
    {
      id: 0,
      user: '글쓴이',
      date: dateFormat(today),
      hit: 6060,
      title: '[EDAM] EDAM Entertainment 홈페이지 오픈',
      post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
    },
  ]);
}
