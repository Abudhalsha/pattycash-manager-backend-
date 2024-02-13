const Expense=require('../models/Expenses')
const getFoodEAmount=async(req,res)=>{
    try {
       //get all expenses
        const Expenses=await Expense.find({})
        //get sum of food category expense
        const Food=Expenses.filter((el)=>el.category==='Food').map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Food)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getFoodEAmount

   