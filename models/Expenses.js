const mongoose=require('mongoose')
//create a expenses schema
const expensesSchema=new mongoose.Schema({
    edate:{ type:Date,required:true},
    category:{type:String,required:true},
    desc:{type:String,required:true},
    amount:{type:Number,required:true},
})
//expenses stored in expenses collection
module.exports=mongoose.model("expenses",expensesSchema)


