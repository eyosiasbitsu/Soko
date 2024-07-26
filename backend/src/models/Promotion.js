const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
    code: { type: String, required: true, unique: true },
    discount: { type: Number, required: true },  // Percentage off
    description: String,
    expiresAt: Date,
    createdAt: { type: Date, default: Date.now }
});

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;
