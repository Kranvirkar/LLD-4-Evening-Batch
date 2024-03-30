const Product = require('../models/product');

exports.getAllProducts = async (req, res) => {
    const products = await Product.find({});
    res.json(products);
};

exports.getProductById = async (req, res) => {
    const product = await Product.findById(req.params.id);
    res.status(200).json({ productInfo: product, message: "product found" });
};

exports.createProduct = async (req, res) => {
    const product = await Product.create(req.body);
    res.status(201).json({ message: "product created" });
};

exports.updateProduct = async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).json({ message: "product updated" });
};

exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.status(201).json({ message: "product deleted" });
};