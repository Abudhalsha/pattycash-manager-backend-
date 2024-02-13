const Income=require('../models/income')
const getIncomeAmount=async(req,res)=>{
    try {
       //get all income
        const Incomes=await Income.find({})
       // get sum of all income
        const Cin=Incomes.map(cin=>cin.amount).reduce((amount,acc)=>{return amount+acc},0)
        res.json(Cin)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getIncomeAmount

   