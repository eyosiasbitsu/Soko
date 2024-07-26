const express = require('express');
const router = express.Router();
const { getAllProducts, getProductById, addProduct, updateProduct, deleteProduct } = require('../controllers/productController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Get all products
router.get('/', getAllProducts);

// Get a single product by ID
router.get('/:productId', getProductById);

// Admin routes
router.post('/', isAuthenticated, isAdmin, addProduct);
router.put('/:productId', isAuthenticated, isAdmin, updateProduct);
router.delete('/:productId', isAuthenticated, isAdmin, deleteProduct);

module.exports = router;
