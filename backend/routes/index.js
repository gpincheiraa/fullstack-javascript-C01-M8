const express = require('express');
const router = express.Router();
const products = require("../controllers/products");

router.route("/products").get(products.index)

// default route
router.get("*", (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

module.exports = router