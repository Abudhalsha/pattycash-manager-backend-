const mongoose=require('mongoose')
const Income=require('../models/income')
const updateIncome=async(req,res)=>{
    try {
         const incomeId=req.params.id
         const updateIncome={
            indate:req.body.indate,
            check:req.body.check,
            desc:req.body.desc,
            amount:req.body.amount,
            }
        
         await Income.findByIdAndUpdate({_id:incomeId},updateIncome)
         res.json({'status':incomeId})
       
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=updateIncome