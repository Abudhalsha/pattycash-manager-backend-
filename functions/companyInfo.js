//import the company models
const Company = require("../models/company");

const companyInfo = async (req, res) => {
  try {
    //find company info
    const company = await Company.findOne({})
    //assign the new info
    const newInfo = {
      name: req.body.name,
      address: req.body.address,
      contact: req.body.contact,
      email: req.body.email,
    };
    //check company info already exists
    if (!company) {
      await Company.create(newInfo);//create a companyinfo
    } else {
      
      company.name = req.body.name;
      company.address = req.body.address;
      company.contact = req.body.contact;
      company.email = req.body.email;
      await company.save();//updating the companyinfo
    }
    res.json({ status: "ok" });
  } catch (error) {
    res.json(error);
  }
};
module.exports = companyInfo;
