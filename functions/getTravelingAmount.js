const Expense=require('../models/Expenses')
const getTravelingEAmount=async(req,res)=>{
    try {

        const Expenses=await Expense.find({})
        const Traveling=Expenses.filter((el)=>el.category==='Traveling').map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Traveling)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getTravelingEAmount

   