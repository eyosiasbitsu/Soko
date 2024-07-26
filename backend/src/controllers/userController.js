const User = require('../models/User');

const getUserProfile = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const { name, email } = req.body;
        const updatedUser = await User.findByIdAndUpdate(req.user.id, { name, email }, { new: true });
        res.json(updatedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserOrders = async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const submitReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const review = new Review({ user: req.user.id, productId, rating, comment });
        await review.save();
        res.status(201).json({ message: 'Review added successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserReviews = async (req, res) => {
    try {
        const reviews = await Review.find({ user: req.user.id });
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    getUserOrders,
    submitReview,
    getUserReviews
};
