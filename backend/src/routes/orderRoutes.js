const express = require('express');
const router = express.Router();
const { placeOrder, getOrderById, getAllOrders, cancelOrder, updateOrderStatus } = require('../controllers/orderController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Place a new order
router.post('/', isAuthenticated, placeOrder);

// Get order by ID
router.get('/:orderId', isAuthenticated, getOrderById);

// Get all orders (Admin only)
router.get('/', isAuthenticated, isAdmin, getAllOrders);

// Cancel an order
router.put('/:orderId/cancel', isAuthenticated, cancelOrder);

// Update order status (Admin only)
router.put('/:orderId/status', isAuthenticated, isAdmin, updateOrderStatus);

module.exports = router;
