// // // const connectDB = require("./db");
// // // connectDB();


// // // const express = require("express");
// // // const cors = require("cors");
// // // require("dotenv").config();

// // // // Initialize Express
// // // const app = express();




// // // // Sample route
// // // app.get("/", (req, res) => {
// // //     res.send("Backend is running...");
// // // });

// // // // Start server
// // // const PORT = process.env.PORT || 5000;
// // // app.listen(PORT, () => {
// // //     console.log(`Server is running on port ${PORT}`);
// // // });


// // const express = require("express");
// // const mongoose = require("mongoose");
// // const productRoutes = require("./routes/productRoutes"); // Import your routes

// // const app = express();
// // const PORT = process.env.PORT || 5000;

// // // Middleware to parse JSON
// // app.use(express.json());

// // // Use the product routes
// // app.use("/api/products", productRoutes);

// // app.get("/", (req, res) => {
// //     res.send("API is running...");
// // });

// // mongoose.connect(process.env.MONGO_URI)
// //     .then(() => {
// //         console.log("✅ MongoDB Connected");
// //         app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
// //     })
// //     .catch(err => console.error("MongoDB connection error:", err));


// require("dotenv").config();  // Load environment variables

// const express = require("express");
// const mongoose = require("mongoose");
// const productRoutes = require("./routes/productRoutes"); 

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


// //WHILE SETTING MOCK DATA 
// require("dotenv").config();  // Load environment variables

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");  // Import CORS middleware
// const productRoutes = require("./routes/productRoutes"); 

// const app = express();  // Initialize express app
// const PORT = process.env.PORT || 5000;

// // ✅ Apply CORS middleware
// app.use(cors());

// // ✅ Middleware to parse JSON
// app.use(express.json());

// // ✅ Use the product routes
// app.use("/api/products", productRoutes);

// // ✅ Root route
// app.get("/", (req, res) => {
//     res.send("API is running...");
// });

// // ✅ Connect to MongoDB
// mongoose.connect(process.env.MONGO_URI)
//   .then(() => {
//     console.log("✅ MongoDB Connected");
//     app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
//   })
//   .catch(err => console.error("MongoDB connection error:", err));



// app.get("/api/products", (req, res) => {
//     const products = [
//         { id: 1, name: "Product 1", price: 100 },
//         { id: 2, name: "Product 2", price: 150 },
//         { id: 3, name: "Product 3", price: 200 }
//     ];
//     res.json(products);
// });


require("dotenv").config();  // Load environment variables

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");  
const productRoutes = require("./routes/productRoutes"); 

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Apply CORS middleware
app.use(cors());

// ✅ Middleware to parse JSON
app.use(express.json());

// ✅ Use the product routes (Mock data handled here)
app.use("/api/products", productRoutes);

// ✅ Root route
app.get("/", (req, res) => {
    res.send("API is running...");
});

// ✅ Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch(err => console.error("MongoDB connection error:", err));




