const User = require('../models/user')
const bcrypt = require('bcryptjs');
const sendaccessToken=require('../middleware/sendaccessToken')

const loginUser=async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
        });
        if (!user) { return res.json({ status: 'error', error: 'Invalid User' }); }
        const isPasswordValid = await bcrypt.compare(req.body.password, user.password);
        if (isPasswordValid) {
            return sendaccessToken(user, res);
        }

        else {
            return res.json({ status: 'error', error: 'Invalid Password' });
        }

    };
module.exports=loginUser
