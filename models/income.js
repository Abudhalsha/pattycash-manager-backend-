const mongoose=require('mongoose')
//create a income schema
const incomeSchema=mongoose.Schema({
    indate:{ type:Date,required:true},
    check:{type:String,required:true},
    desc:{type:String,required:true},
    amount:{type:Number,required:true},
})
//income stored in incomes collection
module.exports=mongoose.model("incomes",incomeSchema)