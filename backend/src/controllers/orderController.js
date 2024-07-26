const Order = require('../models/Order');

const placeOrder = async (req, res) => {
    try {
        const newOrder = new Order({
            user: req.user.id,
            items: req.body.items,
            total: req.body.total,
            address: req.body.address,
            paymentMethod: req.body.paymentMethod,
        });
        await newOrder.save();
        res.status(201).json({ message: 'Order placed successfully', order: newOrder });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getOrderById = async (req, res) => {
    try {
        const order = await Order.findById(req.params.orderId);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, { status: 'Cancelled' }, { new: true });
        res.json({ message: 'Order cancelled successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateOrderStatus = async (req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, { status: req.body.status }, { new: true });
        res.json({ message: 'Order status updated successfully', order });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    placeOrder,
    getOrderById,
    getAllOrders,
    cancelOrder,
    updateOrderStatus
};
