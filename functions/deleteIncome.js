const Income=require('../models/income')
const deleteIncome=async(req,res)=>{
    try {
         const incomeId=req.params.id//get income id from params
         await Income.deleteOne({_id:incomeId})//delete that expense
         res.json({'status':incomeId})
       
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=deleteIncome