const { default: mongoose } = require("mongoose");
const cartSchema = new mongoose.Schema({  
  userInfor:{
    name: String,
    phone: String,
    address: String
  },
  status: {
    default: "starting",
    type: String
  },
  products:[
    {
        productID: String,
        quantity: Number
    }
  ]
},
  {
    timestamps: true
  }
)

const Cart = mongoose.model("Cart", cartSchema, "cart"); //ten model, ten schema, ten db
module.exports = Cart;