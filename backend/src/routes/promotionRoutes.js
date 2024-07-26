const express = require('express');
const router = express.Router();
const { getAllPromotions, addPromotion, updatePromotion, deletePromotion } = require('../controllers/promotionController');
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');

// Get all promotions
router.get('/', getAllPromotions);

// Add a promotion (Admin only)
router.post('/', isAuthenticated, isAdmin, addPromotion);

// Update a promotion (Admin only)
router.put('/:promotionId', isAuthenticated, isAdmin, updatePromotion);

// Delete a promotion (Admin only)
router.delete('/:promotionId', isAuthenticated, isAdmin, deletePromotion);

module.exports = router;
