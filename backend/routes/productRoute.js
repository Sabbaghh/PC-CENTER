import express from 'express';
import {
	getProducts,
	getProductById,
	deleteProductById,
	createProduct,
	updateProduct,
	createProductReview,
	getTopProducts,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';
const router = express.Router();

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);
router.route('/:id').delete(protect, admin, deleteProductById);
router.route('/').post(protect, admin, createProduct);
router.route('/:id').put(protect, admin, updateProduct);
router.route('/:id').put(protect, admin, updateProduct);
router.route('/:id/reviews').put(protect, createProductReview);
router.route('/top').put(protect, getTopProducts);

export default router;
