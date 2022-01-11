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
    id: 1,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 6060,
    title: '1',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 2,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '2',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 3,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1300,
    title: '3',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 4,
    user: '4',
    date: dateFormat(today),
    hit: 503,
    title: '2022 IU Season’s Greetings 예약 판매 안내',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 5,
    user: '5',
    date: dateFormat(today),
    hit: 1000,
    title: '[신세경] 신세경 서포트 신청 안내',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 6,
    user: '6',
    date: dateFormat(today),
    hit: 4,
    title: '[EDAM] EDAM Entertainment 홈페이지 ',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 7,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 6060,
    title: '7',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 8,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '8',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 9,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1300,
    title: '9',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 10,
    user: '4',
    date: dateFormat(today),
    hit: 503,
    title: '10',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 11,
    user: '5',
    date: dateFormat(today),
    hit: 1000,
    title: '11',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 12,
    user: '6',
    date: dateFormat(today),
    hit: 4,
    title: '12',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 13,
    user: '7',
    date: dateFormat(today),
    hit: 4,
    title: '13',
    post: 'ggggg',
  },
].reverse();

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  console.log('123123', req.query);
  const id = req.query;

  // if (page) {
  //   for (let n = 0; n < dummy.length; n++) {
  //     if (n === Number(page)) {
  //       return res.status(200).send(dummy[Number(page)]);
  //     }
  //   }
  // }
  if (method === 'GET' && id.id === 'controller') {
    res.status(200).send({ count: dummy.length, data: dummy });
  }
  if (method === 'GET' && Number(id.id) !== NaN) {
    res.status(200).send({ data: dummy[Number(id.id)] });
  }

  // let currentPage = Number(query);
  // let postsPerPage = 3;
  // let indexOfLastPost = currentPage * postsPerPage;
  // let indexOfFirstPost = indexOfLastPost - postsPerPage;
  // let currentPosts = dummy.slice(indexOfFirstPost, indexOfLastPost);

  // if (method === 'GET' && Number(query) === 1) {
  //   res.status(200).send({ count: dummy.length, data: dummy.slice(0, 4) });
  // } else if (method === 'GET' && Number(query) > 1) {
  // res.status(200).send({ count: dummy.length, data: dummy });
  // }
}
// dummy.slice(Number(query), Number(query + '3'))
export default handler;
