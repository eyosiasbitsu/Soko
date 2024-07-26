const Product = require('../models/Product');

const getAllProducts = async () => {
    return await Product.find({});
};

const getProductById = async (productId) => {
    const product = await Product.findById(productId);
    if (!product) {
        throw new Error('Product not found');
    }
    return product;
};

const addProduct = async (productData) => {
    const newProduct = new Product(productData);
    await newProduct.save();
    return newProduct;
};

const updateProduct = async (productId, updates) => {
    return await Product.findByIdAndUpdate(productId, updates, { new: true });
};

const deleteProduct = async (productId) => {
    await Product.findByIdAndDelete(productId);
};

module.exports = {
    getAllProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
};
