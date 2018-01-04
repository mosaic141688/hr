var mongoose = mongoose || require('mongoose');
var db = db || require('./db');

const UserSchema = new mongoose.Schema({
    first_name: String,
    email:String,
    second_name: String,
    surname: String,
    date_of_birth: String,
    bank_account_number: String,
    bank: String,
    bank_branch: String,
    employment_post: {type: mongoose.Schema.Types.ObjectId, ref: 'post'},
    employment_number: String,
    contract_start_date: Date,
    contract_end_date: Date,
    department: {type: mongoose.Schema.Types.ObjectId, ref: 'department'},
    graded_tax_number: String
})

const User = mongoose.model("user", UserSchema);

let _ID = mongoose.Types.ObjectId;

let createUser = function ({
                               first_name,
                               email,
                               second_name,
                               surname,
                               date_of_birth,
                               bank_account_number,
                               bank,
                               bank_branch,
                               employment_post,
                               employment_number,
                               contract_start_date,
                               contract_end_date,
                               department,
                               graded_tax_number
                           }) {
 return new Promise((resolve,reject)=>{
     console.log(employment_number)
     department=department.length === 12?department:null
     if(!employment_number) reject('An Employee Should be given an employee number')
     User.findOne({employment_number})
         .exec()
         .catch(reject)
         .then(existing_employee =>{
             if(existing_employee){
                 console.log('Existing Employee',existing_employee)
                resolve(existing_employee)
             }else {
                 console.log('new Employee',existing_employee)
                User.create({
                     first_name,
                     email,
                     second_name,
                     surname,
                     date_of_birth,
                     bank_account_number,
                     bank,
                     bank_branch,
                     employment_post,
                     employment_number,
                     contract_start_date,
                     contract_end_date,
                     department,
                     graded_tax_number
                 })
                     .catch(reject)
                     .then(resolve)
             }
         })
 })
}

//createUser({first_name:'Sihle',surname:'Mbhamali',employment_number:'1234' }).catch(console.log).catch(r => console.log(r))
let updateUser = function ({query,update}) {
    return new Promise((resolve,reject)=>{
        User.update(query,update)
            .exec()
            .catch(reject)
            .then(resolve)
    })
}

var getUsers = function ({query,populate,project}) {
    return new Promise((resolve,reject)=>{
        User.find(query)
            .populate(populate)
            .project(project)
            .exec()
            .catch(reject)
            .then(resolve)
    })
}


module.exports = {createUser,updateUser,getUsers}