const { default: mongoose } = require("mongoose");
const randomToken = require('../helper/randomToken')
const accountSchema = new mongoose.Schema({
  fullName: String, //san pham 1
  email: String,
  password: String,
  token: {
    type: String,
    default: randomToken.generateRandomString(20)
  },
  phone: String, 
  avatar: String,
  roleID: String,
  status: String,
  deleted: {
    type: Boolean,
    default: false
  },
  deletedAt: Date
},
  {
    timestamps: true
  }
)

const Account = mongoose.model("Account", accountSchema, "account"); //ten model, ten schema, ten db
module.exports = Account;