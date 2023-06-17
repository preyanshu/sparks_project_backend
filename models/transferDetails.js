const mongoose = require('mongoose');
const { Schema } = mongoose;

const transferSchema = new Schema({
    
    transferTo: String,
    transferFrom: String,
    amount: String,
    date:{
        type: Date,
        default: Date.now
    },
  });
  transfermodel=mongoose.model("transfer",transferSchema) 
  
module.exports=transfermodel;