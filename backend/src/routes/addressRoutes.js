const express = require('express');
const router = express.Router();
const { addAddress, getAddress, updateAddress, deleteAddress } = require('../controllers/addressController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Add a new address
router.post('/', isAuthenticated, addAddress);

// Get all addresses
router.get('/', isAuthenticated, getAddress);

// Update an address
router.put('/:addressId', isAuthenticated, updateAddress);

// Delete an address
router.delete('/:addressId', isAuthenticated, deleteAddress);

module.exports = router;
