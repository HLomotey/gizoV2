import React, { useState, useEffect } from 'react';
import { z } from 'zod';
import Form from '../../components/Form';
import Table from '../../components/Table';
import { inventory } from '../../services/api';

const receiptSchema = z.object({
  productName: z.string().min(1, 'Product name is required'),
  tradeDate: z.string().min(1, 'Trade date is required'),
  receivedQuantity: z.number().min(0, 'Received quantity must be a positive number'),
  supplier: z.string().min(1, 'Supplier is required'),
  price: z.number().min(0, 'Price must be a positive number'),
  voucherNumber: z.string().min(1, 'Voucher number is required'),
  wayBillNumber: z.string().min(1, 'Way bill number is required'),
});

const ReceiptsPage: React.FC = () => {
  const [receiptList, setReceiptList] = useState([]);

  useEffect(() => {
    fetchReceipts();
  }, []);

  const fetchReceipts = async () => {
    try {
      const response = await inventory.getTransactions();
      setReceiptList(response.data.filter((transaction: any) => transaction.type === 'receipt'));
    } catch (error) {
      console.error('Error fetching receipts:', error);
    }
  };

  const handleSubmit = async (data: z.infer<typeof receiptSchema>) => {
    try {
      await inventory.createTransaction({ ...data, type: 'receipt' });
      fetchReceipts();
    } catch (error) {
      console.error('Error creating receipt:', error);
    }
  };

  const formFields = [
    { name: 'productName', label: 'Product Name', type: 'text' },
    { name: 'tradeDate', label: 'Trade Date', type: 'date' },
    { name: 'receivedQuantity', label: 'Received Quantity', type: 'number' },
    { name: 'supplier', label: 'Supplier', type: 'text' },
    { name: 'price', label: 'Price', type: 'number' },
    { name: 'voucherNumber', label: 'Voucher Number', type: 'text' },
    { name: 'wayBillNumber', label: 'Way Bill Number', type: 'text' },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Receipts</h2>
      <Form fields={formFields} onSubmit={handleSubmit} schema={receiptSchema} />
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-4">Receipt List</h3>
        <Table
          headers={['Product Name', 'Trade Date', 'Received Quantity', 'Supplier', 'Price', 'Voucher Number', 'Way Bill Number']}
          data={receiptList}
          onEdit={(item) => console.log('Edit', item)}
          onDelete={(item) => console.log('Delete', item)}
        />
      </div>
    </div>
  );
};

export default ReceiptsPage;