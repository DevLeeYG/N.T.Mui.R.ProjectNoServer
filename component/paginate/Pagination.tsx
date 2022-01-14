import React, { useEffect, useState } from 'react';
import Pagination from 'react-js-pagination';
const Paging = ({
  activePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed,
  prevPageText,
  nextPageText,
  onChange,
}: any) => {
  return (
    <>
      <Pagination
        activePage={activePage}
        itemsCountPerPage={itemsCountPerPage} //한화면에 나오는 카운트
        totalItemsCount={totalItemsCount} //총 갯수
        pageRangeDisplayed={pageRangeDisplayed} //페이지 표시 갯수
        prevPageText={prevPageText}
        nextPageText={nextPageText}
        onChange={onChange}
      />
    </>
  );
};
export default Paging;
