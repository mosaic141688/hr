var post  = require('./post')
module.exports = [
    {
        request:'create_post',
        response:'create_post',
        call_back:post.createPost
    }
]