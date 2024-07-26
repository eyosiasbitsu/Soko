const Payment = require('../models/Payment');  // Assuming a Payment model exists

const makePayment = async (paymentData) => {
    const newPayment = new Payment(paymentData);
    await newPayment.save();
    return newPayment;
};

const getPaymentStatus = async (orderId) => {
    const payment = await Payment.findOne({ orderId });
    if (!payment) {
        throw new Error('Payment not found');
    }
    return payment.status;
};

module.exports = {
    makePayment,
    getPaymentStatus
};
