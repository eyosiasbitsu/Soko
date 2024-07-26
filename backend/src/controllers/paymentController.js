const Payment = require('../models/Payment');

const makePayment = async (req, res) => {
    try {
        const newPayment = new Payment({
            order: req.body.orderId,
            amount: req.body.amount,
            method: req.body.method
        });
        await newPayment.save();
        res.status(201).json({ message: 'Payment made successfully', payment: newPayment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getPaymentStatus = async (req, res) => {
    try {
        const payment = await Payment.findOne({ order: req.params.orderId });
        if (!payment) {
            return res.status(404).json({ message: 'No payment found for this order' });
        }
        res.json({ paymentStatus: payment.status });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    makePayment,
    getPaymentStatus
};
