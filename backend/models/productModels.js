const mongoose = require('mongoose');

// Kreiranje Mongoose šeme za model proizvoda
const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  },
  slide: {
    type: Boolean,
    default: false, // Ako želite da inicijalno bude nečekirano
  },
  width: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  interval: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // Ovde čuvamo URL slike kao string
    required: true,
  },
});

// Kreiranje modela proizvoda koristeći šemu
const Product = mongoose.model('Product', productSchema);

module.exports = Product;