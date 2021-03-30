const Models = require("../models")
const Product = Models.Product

exports.index = async (req, res) => {
  const products = await Product.findAll();
  return res.status(200).json(products);
};