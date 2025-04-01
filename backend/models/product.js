const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String }, //base64 karlo
    category: { type: String }
});

module.exports = mongoose.model("Product", productSchema);
