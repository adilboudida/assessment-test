import React, { createContext, useState, useContext } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({});
  const [totalItems, setTotalItems] = useState(0);

  return (
    <AppContext.Provider value={{
      pageSize, setPageSize,
      currentPage, setCurrentPage,
      searchTerm, setSearchTerm,
      filters, setFilters,
      totalItems, setTotalItems
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);