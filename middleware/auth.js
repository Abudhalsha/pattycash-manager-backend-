const jwt = require('jsonwebtoken');
const User= require('../models/user')

// custom middleware
async function auth(req,res,next){
try {
    const token=req.headers['x-access-token']//get token from heder
    const decoded=jwt.verify(token,process.env.SECRET_KEY)//get the email id based on acces token
    const email=decoded.email
    await User.findOne({email:email})//check token is valid
    next()//token is valid then enter to next
}  catch (err) {
    res.status(401).send({ error: err.message });
  }
}

module.exports= auth;