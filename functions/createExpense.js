//import the expense models
const Expense=require('../models/Expenses')

const createExpense=async(req,res)=>{
    try {
        //assign the expense info
       const newExpense={
        edate:req.body.edate,
        category:req.body.category,
        desc:req.body.desc,
        amount:req.body.amount,
        }
        await Expense.create(newExpense)//create a expene
        res.json({'status':'ok'})
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=createExpense