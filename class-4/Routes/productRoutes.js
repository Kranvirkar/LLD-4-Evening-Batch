// Routing
const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/productControllers");

router.get("/api/products", productControllers.getAllProducts);
router.get("/api/products/:id", productControllers.getProductById);

router.post("/api/products", productControllers.createProduct);

router.put("/api/products/:id", productControllers.updateProduct);

router.delete("/api/products/:id", productControllers.deleteProduct);
