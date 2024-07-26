const Address = require('../models/Address');

const addAddress = async (userId, addressData) => {
    const newAddress = new Address({ ...addressData, user: userId });
    await newAddress.save();
    return newAddress;
};

const getAddress = async (userId) => {
    return await Address.find({ user: userId });
};

const updateAddress = async (addressId, updates) => {
    return await Address.findByIdAndUpdate(addressId, updates, { new: true });
};

const deleteAddress = async (addressId) => {
    await Address.findByIdAndDelete(addressId);
};

module.exports = {
    addAddress,
    getAddress,
    updateAddress,
    deleteAddress
};
