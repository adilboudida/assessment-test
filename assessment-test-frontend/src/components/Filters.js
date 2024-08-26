import React, { useState } from 'react';
import { TextField, Select, MenuItem, IconButton, InputAdornment } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { useAppContext } from '../context/AppContext';

const Filters = ({ fields }) => {
  const { pageSize, setPageSize, searchTerm, setSearchTerm, filters, setFilters } = useAppContext();
  const [showSearch, setShowSearch] = useState(false);

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
  };

  const handleFilterChange = (field, value) => {
    setFilters(prevFilters => {
      const newFilters = { ...prevFilters, [field]: value };
      Object.keys(newFilters).forEach(key => {
        if (key !== field) newFilters[key] = '';
      });
      return newFilters;
    });
  };

  return (
    <div>
      <Select value={pageSize} onChange={handlePageSizeChange}>
        {[5, 10, 20, 50].map(size => (
          <MenuItem key={size} value={size}>{size}</MenuItem>
        ))}
      </Select>
      <IconButton onClick={() => setShowSearch(!showSearch)}>
        <Search />
      </IconButton>
      {showSearch && (
        <TextField
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search..."
        />
      )}
      {fields.map(field => (
        <TextField
          key={field}
          label={field}
          value={filters[field] || ''}
          onChange={(e) => handleFilterChange(field, e.target.value)}
        />
      ))}
    </div>
  );
};

export default Filters;