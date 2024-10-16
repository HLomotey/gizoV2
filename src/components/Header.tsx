import React from 'react';
import { LogOut } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-800">Gizoventory</h1>
      <button className="flex items-center text-gray-600 hover:text-gray-800">
        <LogOut className="mr-2" size={20} />
        Logout
      </button>
    </header>
  );
};

export default Header;