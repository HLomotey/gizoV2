import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';

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
        <Route path="category" element={<CategoryForm />} />
        <Route path="product" element={<ProductForm />} />
        <Route path="supplier" element={<SupplierForm />} />
        <Route path="department" element={<DepartmentForm />} />
      </Routes>
    </div>
  );
};

const CategoryForm: React.FC = () => {
  return <div>Category Registration Form</div>;
};

const ProductForm: React.FC = () => {
  return <div>Product Registration Form</div>;
};

const SupplierForm: React.FC = () => {
  return <div>Supplier Registration Form</div>;
};

const DepartmentForm: React.FC = () => {
  return <div>Department Registration Form</div>;
};

export default RegistrationPage;