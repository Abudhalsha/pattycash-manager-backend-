const Income=require('../models/income')
const createIncome=async(req,res)=>{
    try {
       //assign a income info
       const newIncome={
        indate:req.body.indate,
        check:req.body.check,
        desc:req.body.desc,
        amount:req.body.amount,
        }
        //create a income 
        await Income.create(newIncome)
        res.json({'status':'ok'})
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=createIncome