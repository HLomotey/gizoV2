import express from 'express';
import { getProducts, createProduct } from '../controllers/productController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getProducts);
router.post('/', auth, createProduct);

export default router;