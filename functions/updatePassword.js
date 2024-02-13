const User = require('../models/user')
const Token=require('../models/token')
const bcrypt = require('bcryptjs');

const updatePassword =async (req, res) => {

        const user = await User.findById(req.params.userId);
        if (!user) { return res.json({ status: 'error', error: 'Invalid User' }); }
        const Etoken = await Token.findOne({
            userId: user._id,
            token: req.params.token
        });
        if (!Etoken)
            return res.json({ status: 'error', error: "Invalid link or expired." });

        user.password = await bcrypt.hash(req.body.password, 10); //update the new hash password

        await user.save(); //save new password
        await Etoken.delete(); //delete the reseted token
        return res.json({ status: "ok", msg: "Password reset successfully" });
    
}
module.exports=updatePassword
