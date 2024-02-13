const Expense=require('../models/Expenses')
const deleteExpense=async(req,res)=>{
    try {
         const expenseId=req.params.id//get expense id from params
         await Expense.deleteOne({_id:expenseId})//delete that expense
         res.json({'status':expenseId})
       
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=deleteExpense