const Promotion = require('../models/Promotion');

const getAllPromotions = async (req, res) => {
    try {
        const promotions = await Promotion.find();
        res.json(promotions);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addPromotion = async (req, res) => {
    try {
        const newPromotion = new Promotion(req.body);
        await newPromotion.save();
        res.status(201).json({ message: 'Promotion added successfully', promotion: newPromotion });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updatePromotion = async (req, res) => {
    try {
        const promotion = await Promotion.findByIdAndUpdate(req.params.promotionId, req.body, { new: true });
        res.json({ message: 'Promotion updated successfully', promotion });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deletePromotion = async (req, res) => {
    try {
        await Promotion.findByIdAndRemove(req.params.promotionId);
        res.json({ message: 'Promotion deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getAllPromotions,
    addPromotion,
    updatePromotion,
    deletePromotion
};
