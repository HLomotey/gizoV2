import express from 'express';
import { getDepartments, createDepartment } from '../controllers/departmentController.js';
import { auth } from '../middleware/auth.js';

const router = express.Router();

router.get('/', auth, getDepartments);
router.post('/', auth, createDepartment);

export default router;