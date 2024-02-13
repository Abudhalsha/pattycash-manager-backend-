const Expense=require('../models/Expenses')
const getExpense=async(req,res)=>{
    try {

        const Expenses=await Expense.find({})
        res.json(Expenses)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getExpense