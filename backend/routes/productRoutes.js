const express = require("express");
const router = express.Router();
const Product = require("../models/product"); 

// Get all products
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: "Error fetching products" });
    }
});

// Add a new product
router.post("/", async (req, res) => {
    const { name, price, description, image, category } = req.body;
    const newProduct = new Product({ name, price, description, image, category });

    try {
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: "Error saving product" });
    }
});

module.exports = router;
