const express = require("express");
const productController = require("../Controllers/productController");
const router = express.Router();

// API ENDPOINT
router.get("/get-all-products", productController.getAllProducts);

// GETTING JUST ONE DATA
router.get("/get-product", productController.getOneProduct);

// UPDATING DATA
router.patch("/update-product/:id", productController.updateProduct);

// DELETING DATA
router.delete("/delete-product/:productId", productController.deleteProduct);

// CREATING DATA
router.post("/post-product", productController.createProduct);

module.exports = router ;