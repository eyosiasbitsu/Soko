const express = require('express');
const router = express.Router();
const { addItemToCart, getCartItems, updateCartItem, removeCartItem } = require('../controllers/cartController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Add an item to the cart
router.post('/', isAuthenticated, addItemToCart);

// Get all items in the cart
router.get('/', isAuthenticated, getCartItems);

// Update an item in the cart
router.put('/:itemId', isAuthenticated, updateCartItem);

// Remove an item from the cart
router.delete('/:itemId', isAuthenticated, removeCartItem);

module.exports = router;
