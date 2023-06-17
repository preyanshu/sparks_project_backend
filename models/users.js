const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    
    name: String,
    currentBalance: String,
    email: String,
  });
  usermodel=mongoose.model("customers",UserSchema) 
  
module.exports=usermodel //model and schema are the parameters