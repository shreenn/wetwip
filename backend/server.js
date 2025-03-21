// // const connectDB = require("./db");
// // connectDB();


// // const express = require("express");
// // const cors = require("cors");
// // require("dotenv").config();

// // // Initialize Express
// // const app = express();

// // // Middleware
// // app.use(cors());
// // app.use(express.json());

// // // Sample route
// // app.get("/", (req, res) => {
// //     res.send("Backend is running...");
// // });

// // // Start server
// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //     console.log(`Server is running on port ${PORT}`);
// // });


// const express = require("express");
// const mongoose = require("mongoose");
// const productRoutes = require("./routes/productRoutes"); // Import your routes

// const app = express();
// const PORT = process.env.PORT || 5000;

// // Middleware to parse JSON
// app.use(express.json());

// // Use the product routes
// app.use("/api/products", productRoutes);

// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log("✅ MongoDB Connected");
//         app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
//     })
//     .catch(err => console.error("MongoDB connection error:", err));


require("dotenv").config();  // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes"); 

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Use the product routes
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
    res.send("API is running...");
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("✅ MongoDB Connected");
        app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
    })
    .catch(err => console.error("MongoDB connection error:", err));
