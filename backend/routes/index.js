import express from 'express';
import authRoutes from './authRoutes.js';
import productRoutes from './productRoutes.js';
import supplierRoutes from './supplierRoutes.js';
import departmentRoutes from './departmentRoutes.js';
import inventoryRoutes from './inventoryRoutes.js';

const router = express.Router();

router.use('/auth', authRoutes);
router.use('/products', productRoutes);
router.use('/suppliers', supplierRoutes);
router.use('/departments', departmentRoutes);
router.use('/inventory', inventoryRoutes);

export default router;