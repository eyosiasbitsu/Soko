const express = require('express');
const router = express.Router();
const { getUserProfile, updateUserProfile, getUserOrders, submitReview, getUserReviews } = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Get user profile
router.get('/profile', isAuthenticated, getUserProfile);

// Update user profile
router.put('/profile', isAuthenticated, updateUserProfile);

// Get user orders
router.get('/orders', isAuthenticated, getUserOrders);

// Submit a product review
router.post('/reviews', isAuthenticated, submitReview);

// Get all reviews by a user
router.get('/reviews', isAuthenticated, getUserReviews);

module.exports = router;
