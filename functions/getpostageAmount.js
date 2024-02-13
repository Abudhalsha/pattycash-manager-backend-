const Expense=require('../models/Expenses')
const getPostageEAmount=async(req,res)=>{
    try {
       //get all the expenses
        const Expenses=await Expense.find({})
        const Postage=Expenses.filter((el)=>el.category==='Postage').map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Postage)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getPostageEAmount

   