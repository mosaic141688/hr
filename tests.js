const post = require('./post')

    post.updatePost({query:{job_title:'Support Offices'},update:{capacity:3}})
//post.newPost({job_title:'Support Offices',department:'Technical',requirements:'Certificate',basic_salary:2000,post_id:'12367'})
        post.getPosts({})
.catch(console.log)
.then(console.log)


