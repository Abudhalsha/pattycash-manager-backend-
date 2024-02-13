const User = require('../models/user')
const bcrypt = require('bcryptjs');

const CreateUser=async (req, res) => {
        try {
            //to create a hashing password
            const hashPassword = await bcrypt.hash(req.body.password, 10);
           //create a user
            await User.create({
                name: req.body.name,
                email: req.body.email,
                password: hashPassword
            });
            res.json({ status: "ok" });


        } catch (error) {
            res.json({ status: 'error', error: 'Duplicate email' });
        }

    };

module.exports=CreateUser
