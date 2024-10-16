import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { departments } from '../../services/api';

const departmentSchema = z.object({
  name: z.string().min(1, 'Department name is required'),
});

const DepartmentPage: React.FC = () => {
  const [departmentList, setDepartmentList] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await departments.getAll();
      setDepartmentList(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleSubmit = async (data: z.infer<typeof departmentSchema>) => {
    try {
      await departments.create(data);
      fetchDepartments();
    } catch (error) {
      console.error('Error creating department:', error);
    }
  };

  const formFields = [
    { name: 'name', label: 'Department Name', type: 'text' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Department Registration</h2>
      <Form fields={formFields} onSubmit={handleSubmit} schema={departmentSchema} />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Department List</h3>
        <Table
          headers={['Name']}
          data={departmentList}
          onEdit={(item) => console.log('Edit', item)}
          onDelete={(item) => console.log('Delete', item)}
        />
      </div>
    </div>
  );
};

export default DepartmentPage;