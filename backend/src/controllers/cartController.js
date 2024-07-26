const CartItem = require('../models/CartItem');

const addItemToCart = async (req, res) => {
    try {
        const newCartItem = new CartItem({
            user: req.user.id,
            product: req.body.product,
            quantity: req.body.quantity
        });
        await newCartItem.save();
        res.status(201).json({ message: 'Item added to cart', cartItem: newCartItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getCartItems = async (req, res) => {
    try {
        const cartItems = await CartItem.find({ user: req.user.id });
        res.json(cartItems);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateCartItem = async (req, res) => {
    try {
        const cartItem = await CartItem.findByIdAndUpdate(req.params.itemId, {
            quantity: req.body.quantity
        }, { new: true });
        res.json({ message: 'Cart item updated', cartItem });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const removeCartItem = async (req, res) => {
    try {
        await CartItem.findByIdAndRemove(req.params.itemId);
        res.json({ message: 'Item removed from cart' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addItemToCart,
    getCartItems,
    updateCartItem,
    removeCartItem
};
