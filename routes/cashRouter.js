const express= require('express');
//create a cash router
const cashrouter=express.Router();
//import the required functions
const companyInfo=require('../functions/companyInfo')
const createIncome=require('../functions/createIncome')
const createExpense=require('../functions/createExpense')
const deleteExpense=require('../functions/deleteExpense')
const deleteIncome=require('../functions/deleteIncome')
const getIncome=require('../functions/getIncome')
const getExpense=require('../functions/getExpense');
const getIncomeAmount = require('../functions/getIncomeAmount');
const getExpenseAmount=require('../functions/getExpenseAmount');
const openingBalance = require('../functions/openingbalance');
const getOpening = require('../functions/getOpening');
const getSetting = require('../functions/getSetting');
const getCompanyInfo = require('../functions/getCompanyInfo');
const updateIncome = require('../functions/updateIncome');
const updateExpense = require('../functions/updateExpense');
const getFoodEAmount = require('../functions/foodexpense');
const getStationeryEAmount = require('../functions/getStationery');
const getPostageEAmount = require('../functions/getpostageAmount');
const getTravelingEAmount = require('../functions/getTravelingAmount');
const getCarriageEAmount = require('../functions/getCarriageAmount');
//Company routes
cashrouter.route('/company').post(companyInfo)//save & update the company info
cashrouter.route('/getcompany').get(getCompanyInfo)//get company info
//Opening Balance routes
cashrouter.route('/setting').post(openingBalance)//save & update opening balance
cashrouter.route('/getSetting').get(getSetting)//get the opening balance info
cashrouter.route('/getOb').get(getOpening)//get the opening balance amount
//Income routes
cashrouter.route('/cashin').post(createIncome)//save the income
cashrouter.route('/updatein/:id').put(updateIncome)//update the income info
cashrouter.route('/deletein/:id').delete(deleteIncome)//delete the income based on id
cashrouter.route('/cashinList').get(getIncome)//get all the income
cashrouter.route('/income').get(getIncomeAmount)//get sum of income amount

//Expense routes
cashrouter.route('/cashout').post(createExpense)//save the expense
cashrouter.route('/updateout/:id').put(updateExpense)//update the expense
cashrouter.route('/deleteout/:id').delete(deleteExpense)//delete the expense based on id
cashrouter.route('/cashoutList').get(getExpense)//get all the expense
cashrouter.route('/expense').get(getExpenseAmount)//get sum of expense amount
cashrouter.route('/foodamount').get(getFoodEAmount)//get food expense amount
cashrouter.route('/stationeryamount').get(getStationeryEAmount)//get Stationery expense amount
cashrouter.route('/postageamount').get(getPostageEAmount)//get Postage expense amount
cashrouter.route('/travelingamount').get(getTravelingEAmount)//get Traveling expense amount
cashrouter.route('/carriageamount').get(getCarriageEAmount)//get Carriage expense amount
module.exports=cashrouter

