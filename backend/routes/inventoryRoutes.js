import express from 'express';
import { getInventoryTransactions, createInventoryTransaction } from '../controllers/inventoryController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getInventoryTransactions);
router.post('/', auth, createInventoryTransaction);

export default router;