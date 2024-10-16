import InventoryTransaction from '../models/InventoryTransaction.js';

export const getInventoryTransactions = async (req, res) => {
  try {
    const transactions = await InventoryTransaction.find().populate('product supplier department');
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createInventoryTransaction = async (req, res) => {
  try {
    const transaction = new InventoryTransaction(req.body);
    const savedTransaction = await transaction.save();
    res.status(201).json(savedTransaction);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Add other CRUD operations as needed