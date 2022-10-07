const mongoose = require("mongoose")
const ROLE = {
    ADMIN: 'admin',
    BASIC: 'basic'
  }


const userSchema = new mongoose.Schema
({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
    Name:{
        type:String,
        required:[true,"Please enter name"]
    },
    Password:{
        type:String,
        required:[true,"please enter password"]
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    role:{
        type: String,
        required:true,
        default: ROLE.USER,
    }},
    {
        timestamps: true,
      }

)

module.exports= mongoose.model('user',userSchema)