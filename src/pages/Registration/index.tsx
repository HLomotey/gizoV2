import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import CategoryPage from './CategoryPage';
import ProductPage from './ProductPage';
import SupplierPage from './SupplierPage';
import DepartmentPage from './DepartmentPage';

const RegistrationPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Registration</h1>
      <div className="mb-6">
        <nav className="flex space-x-4">
          <NavLink to="/registration/category" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Category
          </NavLink>
          <NavLink to="/registration/product" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Product
          </NavLink>
          <NavLink to="/registration/supplier" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Supplier
          </NavLink>
          <NavLink to="/registration/department" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Department
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="category" element={<CategoryPage />} />
        <Route path="product" element={<ProductPage />} />
        <Route path="supplier" element={<SupplierPage />} />
        <Route path="department" element={<DepartmentPage />} />
      </Routes>
    </div>
  );
};

export default RegistrationPage;