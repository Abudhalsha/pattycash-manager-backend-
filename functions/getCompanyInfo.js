const Company = require("../models/company");
const getCompanyInfo = async (req, res) => {
  try {
    //get company info
    const company = await Company.findOne({});
    if(company)
     res.json(company);
    else
     res.json({name:'',address:'',contact:'', email:''})
  } catch (error) {
    res.json(error);
  }
};
module.exports = getCompanyInfo;
