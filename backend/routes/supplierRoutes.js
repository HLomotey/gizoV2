import express from 'express';
import { getSuppliers, createSupplier } from '../controllers/supplierController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getSuppliers);
router.post('/', auth, createSupplier);

export default router;