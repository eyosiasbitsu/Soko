const Promotion = require('../models/Promotion');

const getAllPromotions = async () => {
    return await Promotion.find({});
};

const addPromotion = async (promoData) => {
    const newPromo = new Promotion(promoData);
    await newPromo.save();
    return newPromo;
};

const updatePromotion = async (promotionId, updates) => {
    return await Promotion.findByIdAndUpdate(promotionId, updates, { new: true });
};

const deletePromotion = async (promotionId) => {
    await Promotion.findByIdAndDelete(promotionId);
};

module.exports = {
    getAllPromotions,
    addPromotion,
    updatePromotion,
    deletePromotion
};
