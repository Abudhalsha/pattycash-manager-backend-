const setting = require("../models/setting");

const getSetting = async (req, res) => {
  try {
    //get Opening balance info
    const getopen = await setting.findOne({});
    if(getopen)
     res.json(getopen);
    else
     res.json({odate:new Date(),amount:0})
  } catch (error) {
    res.json(error);
  }
};
module.exports = getSetting;
