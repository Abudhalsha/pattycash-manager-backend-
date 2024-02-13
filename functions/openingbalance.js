const setting = require("../models/setting");

const openingBalance =async (req, res) => {
try {
    const OB = await setting.findOne({})
    const newOpen = {
        odate:req.body.odate,
        amount:req.body.amount,
      };
      if (!OB) {
        await setting.create(newOpen);
      } else {
        OB.odate = req.body.odate;
        OB.amount = req.body.amount;
        
        await OB.save();
      }
     res.json({status:'ok'});
} catch (error) {
    res.json(error);
}

}

module.exports=openingBalance