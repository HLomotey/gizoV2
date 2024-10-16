import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { suppliers } from '../../services/api';

const supplierSchema = z.object({
  name: z.string().min(1, 'Supplier name is required'),
  location: z.string().min(1, 'Location is required'),
  email: z.string().email('Invalid email address'),
  contactNumber: z.string().min(1, 'Contact number is required'),
});

const SupplierPage: React.FC = () => {
  const [supplierList, setSupplierList] = useState([]);

  useEffect(() => {
    fetchSuppliers();
  }, []);

  const fetchSuppliers = async () => {
    try {
      const response = await suppliers.getAll();
      setSupplierList(response.data);
    } catch (error) {
      console.error('Error fetching suppliers:', error);
    }
  };

  const handleSubmit = async (data: z.infer<typeof supplierSchema>) => {
    try {
      await suppliers.create(data);
      fetchSuppliers();
    } catch (error) {
      console.error('Error creating supplier:', error);
    }
  };

  const formFields = [
    { name: 'name', label: 'Supplier Name', type: 'text' },
    { name: 'location', label: 'Location', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
    { name: 'contactNumber', label: 'Contact Number', type: 'tel' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Supplier Registration</h2>
      <Form fields={formFields} onSubmit={handleSubmit} schema={supplierSchema} />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Supplier List</h3>
        <Table
          headers={['Name', 'Location', 'Email', 'Contact Number']}
          data={supplierList}
          onEdit={(item) => console.log('Edit', item)}
          onDelete={(item) => console.log('Delete', item)}
        />
      </div>
    </div>
  );
};

export default SupplierPage;