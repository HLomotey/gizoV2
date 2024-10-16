import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { products } from '../../services/api';

const productSchema = z.object({
  category: z.string().min(1, 'Category is required'),
  name: z.string().min(1, 'Product name is required'),
  unitOfIssue: z.string().min(1, 'Unit of issue is required'),
  reorderQuantity: z.number().min(0, 'Reorder quantity must be a positive number'),
  image: z.string().optional(),
});

const ProductPage: React.FC = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await products.getAll();
      setProductList(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleSubmit = async (data: z.infer<typeof productSchema>) => {
    try {
      await products.create(data);
      fetchProducts();
    } catch (error) {
      console.error('Error creating product:', error);
    }
  };

  const formFields = [
    { name: 'category', label: 'Category', type: 'text' },
    { name: 'name', label: 'Product Name', type: 'text' },
    { name: 'unitOfIssue', label: 'Unit of Issue', type: 'text' },
    { name: 'reorderQuantity', label: 'Reorder Quantity', type: 'number' },
    { name: 'image', label: 'Product Image URL', type: 'text' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Product Registration</h2>
      <Form fields={formFields} onSubmit={handleSubmit} schema={productSchema} />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Product List</h3>
        <Table
          headers={['Category', 'Name', 'Unit of Issue', 'Reorder Quantity']}
          data={productList}
          onEdit={(item) => console.log('Edit', item)}
          onDelete={(item) => console.log('Delete', item)}
        />
      </div>
    </div>
  );
};

export default ProductPage;