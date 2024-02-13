const jwt = require('jsonwebtoken');

function sendaccessToken(user, res) {
    const token = jwt.sign({
        name: user.name,
        email: user.email
    },process.env.SECRET_KEY);//send access token as name and email
    return res.json({ status: "ok", user: token });
}
module.exports= sendaccessToken;
