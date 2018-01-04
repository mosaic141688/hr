var mongoose = mongoose || require('mongoose')
var db = db || require('./db')

const IncomeSchema = new mongoose.Schema({
    name: String,
    value: {
        constant: {type: Number, default: 0}, //If this is a fixed deduction/earning
        multiplier: {type: Number, default: 0} // If The deduction is a percentage of the Net Pay
    },

    type: String,
})

const Income = mongoose.model("income", IncomeSchema)

var _ID = _ID || mongoose.Types.ObjectId

const create_income = function ({name,value,type}) {
    return new Promise((resolve,reject) =>{
        Income.create({name,value,type})
            .catch(reject)
            .then(resolve)
    })
}

const get_incomes = function ({query}) {
    return new Promise((resolve,reject)=>{
        Income.find(query)
            .exec()
            .catch(reject)
            .then(resolve)
    })
}

const delete_incomes = function (query) {
    return new Promise((resolve,reject)=>{
        Income.remove(query)
            .exec()
            .catch(reject)
            .then(resolve)
    })
}




module.exports = {create_income,get_incomes}