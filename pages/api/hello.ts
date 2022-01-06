// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  index: number;
  title: string;
  content: string;
}[];

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  res.status(200).json([{ index: 1, title: 'gd', content: 'gdxzz' }]);
}
