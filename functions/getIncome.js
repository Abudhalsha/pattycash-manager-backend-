const Income=require('../models/income')
const getIncome=async(req,res)=>{
    try {
        //find all incomes
        const Incomes=await Income.find({})
        return res.json(Incomes)
    } catch (error) {
        res.json({'status':error})
    }
}

module.exports=getIncome