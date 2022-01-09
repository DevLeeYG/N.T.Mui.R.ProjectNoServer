import React, { useState } from 'react';

import Pagination from 'react-js-pagination';
const Paging = () => {
  const [page, setPage] = useState(1);
  const handlePageChange = (page: any) => {
    setPage(page);
  };
  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={5} //한화면에 나오는 카운트
      totalItemsCount={450} //총 갯수
      pageRangeDisplayed={5} //페이지 표시 갯수
      prevPageText={'‹'}
      nextPageText={'›'}
      onChange={handlePageChange}
    />
  );
};
export default Paging;
