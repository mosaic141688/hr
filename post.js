var mongoose = mongoose || require('mongoose')
var db = db || require('./db')

const PostSchema = new mongoose.Schema({
    job_title:String,
    department:String,
    requirements:String,
    basic_salary:Number,
    job_description:String,
    post_id:String,
    capacity:{type:Number,default:1},
    reports_to:{type:mongoose.Schema.Types.ObjectId,ref:'post'}
})

const Post = mongoose.model("post",PostSchema)

var _ID = _ID||mongoose.Types.ObjectId

var newPost = function({
    job_title,
    department,
    requirements,
    basic_salary,
    job_description,
    post_id,
    reports_to
                       }){
    return new Promise((resolve,reject)=>{
        if(!post_id){
            reject('A new post should have a post_id')
        }

        Post.findOne({post_id})
            .exec()
            .catch(reject)
            .then(existing_post =>{
                if(existing_post){
                    resolve(existing_post)
                }else {
                    Post.create({
                        job_title,
                        department,
                        requirements,
                        basic_salary,
                        job_description,
                        post_id,
                        reports_to
                    })
                        .then(resolve)
                        .catch(reject)
                }
            })
    })
}

var updatePost = function ({query,update}) {
    return new Promise((resolve,reject) => {
        Post.update(query,update,{multiple:true})
            .exec()
            .catch(reject)
            .then(resolve)
    })
}

var getPosts = function (query) {
    return new Promise((resolve,reject) => {
        Post.find(query)
            .catch(reject)
            .then(resolve)
    })
}

module.exports = {newPost,getPosts,updatePost}

