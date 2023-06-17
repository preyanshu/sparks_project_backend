const mongoose=require("mongoose");
const mongoURI="mongodb+srv://preyanshu:08012005@sparksproject.ulccykq.mongodb.net/?retryWrites=true&w=majority"
const connecttomongo=async()=> {
    await mongoose.connect(mongoURI)
    console.log("connected successfully to database")
}

module.exports=connecttomongo; 