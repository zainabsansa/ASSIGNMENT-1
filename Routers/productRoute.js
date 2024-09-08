const express = require("express");
const productController = require("../Controllers/productController");
const protected= require("../Middlewares/protected");
const productRouter = express.Router();

// API ENDPOINT
productRouter.get("/get-all-products", productController.getAllProducts);

// GETTING JUST ONE DATA
productRouter.get("/get-product", productController.getOneProduct);

// UPDATING DATA
productRouter.patch("/update-product/:id",protected.authProtected ,productController.updateProduct);

// DELETING DATA
productRouter.delete("/delete-product/:productId",protected.authProtected ,productController.deleteProduct);

// CREATING DATA
productRouter.post("/post-product", protected.authProtected, productController.createProduct);

module.exports = productRouter ;