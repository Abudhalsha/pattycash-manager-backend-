const mongoose=require('mongoose')
//create a setting schema
const setting=mongoose.Schema({
    date:{ type:Date,required:true},
    amount:{type:Number,required:true},
})
//opening balance stored in settings collection
module.exports=mongoose.model("settings",setting)