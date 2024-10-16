import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  login: (credentials: { email: string; password: string }) => api.post('/auth/login', credentials),
  register: (userData: { email: string; password: string; role: string }) => api.post('/auth/register', userData),
};

export const products = {
  getAll: () => api.get('/products'),
  create: (productData: any) => api.post('/products', productData),
  // Add other product-related API calls as needed
};

export const suppliers = {
  getAll: () => api.get('/suppliers'),
  create: (supplierData: any) => api.post('/suppliers', supplierData),
  // Add other supplier-related API calls as needed
};

export const departments = {
  getAll: () => api.get('/departments'),
  create: (departmentData: any) => api.post('/departments', departmentData),
  // Add other department-related API calls as needed
};

export const inventory = {
  getTransactions: () => api.get('/inventory'),
  createTransaction: (transactionData: any) => api.post('/inventory', transactionData),
  // Add other inventory-related API calls as needed
};

export default api;