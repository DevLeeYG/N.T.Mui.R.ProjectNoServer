import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Pagination from 'react-js-pagination';
const Paging = ({ dataSize, page, setPage }: any) => {
  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <>
      <Pagination
        activePage={page}
        itemsCountPerPage={3} //한화면에 나오는 카운트
        totalItemsCount={dataSize} //총 갯수
        pageRangeDisplayed={Math.ceil(dataSize / 3)} //페이지 표시 갯수
        prevPageText={'‹'}
        nextPageText={'›'}
        onChange={handlePageChange}
      />
    </>
  );
};
export default Paging;
