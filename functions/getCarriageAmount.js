const Expense=require('../models/Expenses')
const getCarriageEAmount=async(req,res)=>{
    try {
        //get all expenses
        const Expenses=await Expense.find({})
        //get sum of carriage category expense
        const Carriage=Expenses.filter((el)=>el.category==='Carriage').map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Carriage)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getCarriageEAmount

   