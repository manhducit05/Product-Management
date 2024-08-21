const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  tittle: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  deleted: Boolean
})

const Product = mongoose.model("Product", productSchema, "products"); //ten model, ten schema, ten db
module.exports = Product;