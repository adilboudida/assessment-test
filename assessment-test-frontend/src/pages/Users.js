import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { fetchUsers } from '../utils/api';
import DataTable from '../components/DataTable';
import Filters from '../components/Filters';
import Pagination from '../components/Pagination';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { pageSize, currentPage, filters, setTotalItems } = useAppContext();

  useEffect(() => {
    const loadUsers = async () => {
      const data = await fetchUsers({
        limit: pageSize,
        skip: (currentPage - 1) * pageSize,
        ...filters
      });
      setUsers(data.users);
      setTotalItems(data.total);
    };
    loadUsers();
  }, [pageSize, currentPage, filters, setTotalItems]);

  const userFields = ['firstName', 'lastName', 'email', 'phone', 'username'];

  return (
    <div>
      <h1>Users</h1>
      <Filters fields={userFields} />
      <DataTable data={users} columns={userFields} />
      <Pagination />
    </div>
  );
};

export default Users;