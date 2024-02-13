const Expense=require('../models/Expenses')
const getExpenseAmount=async(req,res)=>{
    try {
        //get all expenses
        const Expenses=await Expense.find({})
        //get sum of all expenses
        const Cout=Expenses.map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Cout)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getExpenseAmount

   