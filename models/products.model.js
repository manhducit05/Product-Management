const { default: mongoose } = require("mongoose");
var slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const productSchema = new mongoose.Schema({
  tittle: String, //san pham 1
  description: String,
  price: Number,
  discountPercentage: Number,
  stock: Number,
  thumbnail: String,
  status: String,
  position: Number,
  slug: { type: String, slug: "tittle", unique: true }, // san-pham-1
  deleted: {
    type: Boolean,
    default: false
  }
})

const Product = mongoose.model("Product", productSchema, "products"); //ten model, ten schema, ten db
module.exports = Product;