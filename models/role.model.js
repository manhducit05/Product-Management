const { default: mongoose } = require("mongoose");

const roleSchema = new mongoose.Schema({  
  title: String,
  description: String,
  deleted: {
    type: Boolean,
    default: false
  },
  permission:{
    type: Array,
    default: []
  },
  deletedAt: Date,

},
  {
    timestamps: true
  }
)

const Role = mongoose.model("Role", roleSchema, "roles"); //ten model, ten schema, ten db
module.exports = Role;