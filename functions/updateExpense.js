const mongoose=require('mongoose')
const Expense=require('../models/Expenses')
const updateExpense=async(req,res)=>{
    try {
         const expenseId=req.params.id
         const updateExpense={
            edate:req.body.edate,
            category:req.body.category,
            desc:req.body.desc,
            amount:req.body.amount,
            }
        
         await Expense.findByIdAndUpdate({_id:expenseId},updateExpense)
         res.json({'status':expenseId})
       
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=updateExpense