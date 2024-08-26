import axios from 'axios';

const API_BASE_URL = 'https://dummyjson.com';

export const fetchUsers = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/users`, { params });
  return response.data;
};

export const fetchProducts = async (params) => {
  const response = await axios.get(`${API_BASE_URL}/products`, { params });
  return response.data;
};