import React from 'react';
import { BarChart, Users, ShoppingCart, DollarSign } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Products"
          value="1,234"
          icon={<ShoppingCart className="text-blue-500" size={24} />}
        />
        <DashboardCard
          title="Total Users"
          value="56"
          icon={<Users className="text-green-500" size={24} />}
        />
        <DashboardCard
          title="Total Sales"
          value="$45,678"
          icon={<DollarSign className="text-yellow-500" size={24} />}
        />
        <DashboardCard
          title="Low Stock Items"
          value="23"
          icon={<BarChart className="text-red-500" size={24} />}
        />
      </div>
      {/* Add more dashboard components here */}
    </div>
  );
};

interface DashboardCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        {icon}
      </div>
      <p className="text-3xl font-bold text-gray-800">{value}</p>
    </div>
  );
};

export default HomePage;