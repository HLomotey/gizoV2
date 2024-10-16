import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Package, FileSpreadsheet, Settings, UserPlus } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav className="mt-8">
        <NavLink to="/" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </NavLink>
        <NavLink to="/inventory" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Package className="inline-block mr-2" size={20} />
          Inventory
        </NavLink>
        <NavLink to="/excel-upload" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <FileSpreadsheet className="inline-block mr-2" size={20} />
          Excel Upload
        </NavLink>
        <NavLink to="/configuration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <Settings className="inline-block mr-2" size={20} />
          Configuration
        </NavLink>
        <NavLink to="/registration" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
          <UserPlus className="inline-block mr-2" size={20} />
          Registration
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;