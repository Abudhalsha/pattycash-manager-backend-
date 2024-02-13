const setting = require("../models/setting");

const getOpening =async (req, res) => {
try {
    //get opening balance amount
    const OB = await setting.findOne({})
    if(OB)
      res.json(OB.amount);
    else
      res.json(0)
} catch (error) {
    res.json(error);
}

}

module.exports=getOpening