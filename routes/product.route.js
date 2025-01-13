const express = require("express");
const router = express.Router();
const Product = require("../models/product.model.js");
const {getProducts,getProduct,createProduct} = require("../controllers/product.controller.js");

router.get('/', getProducts);
router.get('/:id',getProduct);
router.post('/',createProduct);


module.exports = router;