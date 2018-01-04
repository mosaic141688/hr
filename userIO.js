var user  = require('./user')
module.exports = [
    {
        request:'create_user',
        response:'create_user',
        call_back:user.createUser
    }
]