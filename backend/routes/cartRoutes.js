// const express = require('express');
// const router = express.Router();
// const Cart = require('../models/cart');
// const auth = require('../middleware/auth'); // If you have authentication

// // Add item to cart
// router.post('/', auth, async (req, res) => {
//   try {
//     const { productId, quantity } = req.body;
//     let cart = await Cart.findOne({ userId: req.user._id });

//     if (!cart) {
//       cart = new Cart({
//         userId: req.user._id,
//         items: [{ productId, quantity }]
//       });
//     } else {
//       const itemIndex = cart.items.findIndex(item => item.productId.toString() === productId);
      
//       if (itemIndex > -1) {
//         cart.items[itemIndex].quantity += quantity;
//       } else {
//         cart.items.push({ productId, quantity });
//       }
//     }

//     await cart.save();
//     res.status(201).send(cart);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// // Get user's cart
// router.get('/', auth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id }).populate('items.productId');
//     res.send(cart || { items: [] });
//   } catch (err) {
//     res.status(500).send(err.message);
//   }
// });

// // Update cart item quantity
// router.patch('/:itemId', auth, async (req, res) => {
//   try {
//     const { quantity } = req.body;
//     const cart = await Cart.findOne({ userId: req.user._id });
    
//     const item = cart.items.id(req.params.itemId);
//     if (!item) return res.status(404).send('Item not found');
    
//     item.quantity = quantity;
//     await cart.save();
//     res.send(cart);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// // Remove item from cart
// router.delete('/:itemId', auth, async (req, res) => {
//   try {
//     const cart = await Cart.findOne({ userId: req.user._id });
//     cart.items.pull(req.params.itemId);
//     await cart.save();
//     res.send(cart);
//   } catch (err) {
//     res.status(400).send(err.message);
//   }
// });

// module.exports = router;