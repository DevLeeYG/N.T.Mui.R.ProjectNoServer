import React from 'react';
/* eslint-disable import/no-anonymous-default-export */
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export function dateFormat(date: Date) {
  let month: number | string = date.getMonth() + 1;
  let day: number | string = date.getDate();
  let hour: number | string = date.getHours();
  let minute: number | string = date.getMinutes();
  let second: number | string = date.getSeconds();

  month = month >= 10 ? month : '0' + month;
  day = day >= 10 ? day : '0' + day;
  hour = hour >= 10 ? hour : '0' + hour;
  minute = minute >= 10 ? minute : '0' + minute;
  second = second >= 10 ? second : '0' + second;

  return date.getFullYear() + '.' + month + '.' + day;
}
let today = new Date();

const dummy = [
  {
    id: 0,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 6060,
    title: '[EDAM] EDAM Entertainment 홈페이지 오픈',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 1,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '[신세경] 2022 Season’s Greetings 예약 판매 안내',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 2,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1300,
    title: '한경its 봄철 야유회',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 3,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '2022 IU Season’s Greetings 예약 판매 안내',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 4,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1000,
    title: '[신세경] 신세경 서포트 신청 안내',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 5,
    user: '[아이유] made EDAM 내 유애나 4기 인증 관련 안내',
    date: dateFormat(today),
    hit: 4,
    title: '[EDAM] EDAM Entertainment 홈페이지 ',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
];

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const query = req.query.page;

  if (method === 'GET') {
    res.status(200).send(dummy.slice(Number(query)));
  }
}
// dummy.slice(Number(query), Number(query + '3'))
export default handler;
