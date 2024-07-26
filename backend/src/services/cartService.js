const CartItem = require('../models/CartItem');

const addItemToCart = async (userId, productDetails) => {
    const newItem = new CartItem({ ...productDetails, user: userId });
    await newItem.save();
    return newItem;
};

const getCartItems = async (userId) => {
    return await CartItem.find({ user: userId });
};

const updateCartItem = async (itemId, updates) => {
    return await CartItem.findByIdAndUpdate(itemId, updates, { new: true });
};

const removeCartItem = async (itemId) => {
    await CartItem.findByIdAndDelete(itemId);
};

module.exports = {
    addItemToCart,
    getCartItems,
    updateCartItem,
    removeCartItem
};
