import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import ReceiptsPage from './ReceiptsPage';
import IssuesPage from './IssuesPage';
import StockTakingPage from './StockTakingPage';

const InventoryPage: React.FC = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Inventory Management</h1>
      <div className="mb-6">
        <nav className="flex space-x-4">
          <NavLink to="/inventory/receipts" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Receipts
          </NavLink>
          <NavLink to="/inventory/issues" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Issues
          </NavLink>
          <NavLink to="/inventory/stock-taking" className={({ isActive }) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-gray-300 text-gray-800' : 'text-gray-600 hover:bg-gray-200'}`}>
            Stock Taking
          </NavLink>
        </nav>
      </div>
      <Routes>
        <Route path="receipts" element={<ReceiptsPage />} />
        <Route path="issues" element={<IssuesPage />} />
        <Route path="stock-taking" element={<StockTakingPage />} />
      </Routes>
    </div>
  );
};

export default InventoryPage;