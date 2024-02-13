const Expense=require('../models/Expenses')
const getStationeryEAmount=async(req,res)=>{
    try {

        const Expenses=await Expense.find({})
        const Stationery=Expenses.filter((el)=>el.category==='Stationery').map(cout=>cout.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Stationery)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getStationeryEAmount

   