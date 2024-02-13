const User = require('../models/user')
const Token=require('../models/token')
const crypto=require('crypto')
const sendEmail=require('../utils/sendEmail')
const forgotPassword= async (req, res) => {
        //check email already register
        const user = await User.findOne({
            email: req.body.email,
        });
        if (!user) { return res.json({ status: 'error', error: 'Invalid User' }); }
        //check already token create or not
        let Etoken = await Token.findOne({ userId: user._id });
        //create a token and save it to the token collection
        if (!Etoken) {
            Etoken = await Token({
                userId: user._id,
                token: crypto.randomBytes(32).toString('hex'),
            }).save();
        }
        //create a base url link for the reset password
        const link = `${process.env.BASE_URL}/password-reset/${user._id}/${Etoken.token}`;
        //this link send to the email
        await sendEmail(user.email, "password reset", link);
        //email send response
        return res.json({ status: "ok", msg: "Password reset link sent to your email account." });
    };

module.exports=forgotPassword;
