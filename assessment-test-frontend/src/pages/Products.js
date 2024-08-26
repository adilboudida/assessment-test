import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchProducts } from '../utils/api';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';
import { Tabs, Tab } from '@material-ui/core';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [tab, setTab] = useState('ALL');
  const { pageSize, currentPage, filters, setTotalItems } = useAppContext();

  useEffect(() => {
    const loadProducts = async () => {
      const params = {
        limit: pageSize,
        skip: (currentPage - 1) * pageSize,
        ...filters
      };
      if (tab === 'LAPTOPS') {
        params.category = 'laptops';
      }
      const data = await fetchProducts(params);
      setProducts(data.products);
      setTotalItems(data.total);
    };
    loadProducts();
  }, [pageSize, currentPage, filters, tab, setTotalItems]);

  const productFields = ['title', 'brand', 'category'];

  return (
    <div>
      <h1>Products</h1>
      <Tabs value={tab} onChange={(e, newValue) => setTab(newValue)}>
        <Tab label="ALL" value="ALL" />
        <Tab label="LAPTOPS" value="LAPTOPS" />
      </Tabs>
      <Filters fields={productFields} />
      <DataTable data={products} columns={productFields} />
      <Pagination />
    </div>
  );
};

export default Products;