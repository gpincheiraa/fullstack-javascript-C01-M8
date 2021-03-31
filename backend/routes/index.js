const express = require('express');
const router = express.Router();
const products = require("../controllers/products");

router.get("/products", products.index);

module.exports = router
