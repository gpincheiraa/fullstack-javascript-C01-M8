const express = require('express');
const router = express.Router();
const products = require("../controllers/products");

router.route("/api/products")
  .get(products.index)


module.exports = router