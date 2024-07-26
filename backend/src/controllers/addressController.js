const Address = require('../models/Address');

const addAddress = async (req, res) => {
    try {
        const newAddress = new Address({
            user: req.user.id,
            address: req.body.address
        });
        await newAddress.save();
        res.status(201).json({ message: 'Address added successfully', address: newAddress });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAddress = async (req, res) => {
    try {
        const addresses = await Address.find({ user: req.user.id });
        res.json(addresses);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateAddress = async (req, res) => {
    try {
        const address = await Address.findByIdAndUpdate(req.params.addressId, { address: req.body.address }, { new: true });
        res.json({ message: 'Address updated successfully', address });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteAddress = async (req, res) => {
    try {
        await Address.findByIdAndRemove(req.params.addressId);
        res.json({ message: 'Address deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    addAddress,
    getAddress,
    updateAddress,
    deleteAddress
};
