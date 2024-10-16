import React, { useState } from 'react';
import { Key, UserPlus, Shield, FileText } from 'lucide-react';

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
          {activeTab === 'passwordChange' && <PasswordChangeForm />}
          {activeTab === 'userRegistration' && <UserRegistrationForm />}
          {activeTab === 'roleManagement' && <RoleManagementForm />}
          {activeTab === 'auditLogs' && <AuditLogs />}
        </div>
      </div>
    </div>
  );
};

const PasswordChangeForm: React.FC = () => {
  // Implement password change form
  return <div>Password Change Form</div>;
};

const UserRegistrationForm: React.FC = () => {
  // Implement user registration form
  return <div>User Registration Form</div>;
};

const RoleManagementForm: React.FC = () => {
  // Implement role management form
  return <div>Role Management Form</div>;
};

const AuditLogs: React.FC = () => {
  // Implement audit logs display
  return <div>Audit Logs</div>;
};

export default ConfigurationPage;