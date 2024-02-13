const mongoose=require('mongoose')
//create a user schema
const User=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true}
})
//create a model and userinfo stored in users collection
const model=mongoose.model('users',User)
module.exports=model
