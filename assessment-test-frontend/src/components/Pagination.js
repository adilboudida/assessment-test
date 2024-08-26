import React from 'react';
import { Pagination as MuiPagination } from '@material-ui/lab';
import { useAppContext } from '../context/AppContext';

const Pagination = () => {
  const { currentPage, setCurrentPage, pageSize, totalItems } = useAppContext();

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <MuiPagination
      count={Math.ceil(totalItems / pageSize)}
      page={currentPage}
      onChange={handlePageChange}
    />
  );
};

export default Pagination;