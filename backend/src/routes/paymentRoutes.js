const express = require('express');
const router = express.Router();
const { makePayment, getPaymentStatus } = require('../controllers/paymentController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Make a payment
router.post('/make', isAuthenticated, makePayment);

// Get payment status
router.get('/status/:orderId', isAuthenticated, getPaymentStatus);

module.exports = router;
