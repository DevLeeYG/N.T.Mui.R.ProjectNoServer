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

let count = 13;

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
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '4',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 5,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1000,
    title: '5',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 6,
    user: '[아이유] made EDAM 내 유애나 4기 인증 관련 안내',
    date: dateFormat(today),
    hit: 4,
    title: '6 ',
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
    hit: 6060,
    title: '8',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 9,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '9',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 10,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1300,
    title: '10',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 11,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 503,
    title: '11',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 12,
    user: 'EDAM엔터테이먼트',
    date: dateFormat(today),
    hit: 1000,
    title: '12',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
  {
    id: 13,
    user: '[아이유] made EDAM 내 유애나 4기 인증 관련 안내',
    date: dateFormat(today),
    hit: 4,
    title: '13 ',
    post: '안녕하세요.EDAM엔터테인먼트입니다.EDAM엔터테인먼트는 공식 홈페이지를 새롭게 오픈하였습니다. 공식 홈페이지를 통해 소속 아티스트의 정보를 전할 예정이오니 많은 관심과 이용 바랍니다. 항상 발전하며, 뻔한 생각을 뒤집어 시대를 뛰어넘는 EDAM엔터테인먼트가 되겠습니다.감사합니다.',
  },
].reverse();

function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  const query = req.query.page;
  let currentPage = Number(query);
  let postsPerPage = 3;

  let indexOfLasPost = currentPage * postsPerPage;
  let indexOfFirstPost = indexOfLasPost - postsPerPage;

  let currentPosts = dummy.slice(indexOfFirstPost, indexOfLasPost);

  console.log('123123123312', currentPosts);
  if (method === 'GET' && Number(query) === 1) {
    res.status(200).send({ count: count, data: dummy.slice(1, 4) });
  } else if (method === 'GET' && Number(query) > Number('1')) {
    res.status(200).send({ count: count, data: currentPosts });
  }
}

export default handler;
