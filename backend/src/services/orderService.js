const Order = require('../models/Order');

const placeOrder = async (orderData) => {
    const newOrder = new Order(orderData);
    await newOrder.save();
    return newOrder;
};

const getOrderById = async (orderId) => {
    const order = await Order.findById(orderId);
    if (!order) {
        throw new Error('Order not found');
    }
    return order;
};

const getAllOrders = async () => {
    return await Order.find({});
};

const cancelOrder = async (orderId) => {
    return await Order.findByIdAndUpdate(orderId, { status: 'Cancelled' }, { new: true });
};

module.exports = {
    placeOrder,
    getOrderById,
    getAllOrders,
    cancelOrder
};
