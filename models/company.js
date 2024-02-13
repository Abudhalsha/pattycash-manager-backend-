const mongoose=require('mongoose')
//create a company schema
const companySchema=new mongoose.Schema({
    name:{type:String,required:true},
    address:{type:String,required:true},
    contact:{type:String,required:true},
    email:{type:String,required:true,unique:true}
})
//company info stored in companies collection
module.exports=mongoose.model("companies",companySchema)

