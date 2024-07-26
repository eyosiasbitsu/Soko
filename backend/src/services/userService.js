const User = require('../models/User');

const getUserProfile = async (userId) => {
    return await User.findById(userId).select('-password');
};

const updateUserProfile = async (userId, updates) => {
    return await User.findByIdAndUpdate(userId, updates, { new: true });
};

const getUserOrders = async (userId) => {
    // Assuming Order is a model that relates to User
    return await Order.find({ user: userId });
};

module.exports = {
    getUserProfile,
    updateUserProfile,
    getUserOrders
};
