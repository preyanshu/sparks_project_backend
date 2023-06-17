const connecttomongo=require("./db")
const express=require("express")
var cors = require('cors')

connecttomongo();
const app=express()
const port=5000; 


app.use(cors())
app.use(express.json())

//endpoints

app.use('/api/viewCustomers', require('./routes/Customers_list'))
app.use('/api/transferMoney', require('./routes/Transfer_details'))
app.use('/api/ubdateBalance', require('./routes/ubdate_balance'))




app.listen(port,()=>{
    console.log("connected succesfully at port "+ port)
})