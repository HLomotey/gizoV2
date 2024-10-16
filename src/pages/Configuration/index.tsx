import React, { useState } from 'react';
import { Key, UserPlus, Shield, FileText } from 'lucide-react';
import PasswordChangePage from './PasswordChangePage';
import UserRegistrationPage from './UserRegistrationPage';
import RoleManagementPage from './RoleManagementPage';
import AuditLogsPage from './AuditLogsPage';

const ConfigurationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('passwordChange');

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Configuration</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="flex border-b">
          <button
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'passwordChange' ? 'bg-gray-200 font-semibold' : ''}`}
            onClick={() => setActiveTab('passwordChange')}
          >
            <Key className="inline-block mr-2" size={20} />
            Password Change
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'userRegistration' ? 'bg-gray-200 font-semibold' : ''}`}
            onClick={() => setActiveTab('userRegistration')}
          >
            <UserPlus className="inline-block mr-2" size={20} />
            User Registration
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'roleManagement' ? 'bg-gray-200 font-semibold' : ''}`}
            onClick={() => setActiveTab('roleManagement')}
          >
            <Shield className="inline-block mr-2" size={20} />
            Role Management
          </button>
          <button
            className={`flex-1 py-2 px-4 text-center ${activeTab === 'auditLogs' ? 'bg-gray-200 font-semibold' : ''}`}
            onClick={() => setActiveTab('auditLogs')}
          >
            <FileText className="inline-block mr-2" size={20} />
            Audit Logs
          </button>
        </div>
        <div className="p-6">
          {activeTab === 'passwordChange' && <PasswordChangePage />}
          {activeTab === 'userRegistration' && <UserRegistrationPage />}
          {activeTab === 'roleManagement' && <RoleManagementPage />}
          {activeTab === 'auditLogs' && <AuditLogsPage />}
        </div>
      </div>
    </div>
  );
};

export default ConfigurationPage;