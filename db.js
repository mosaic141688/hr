var mongoose = mongoose||require('mongoose');
const url='mongodb://localhost:27017/personel';
mongoose.Promise = global.Promise
const connect = function () {
    mongoose.connect(url,{
        useMongoClient:true
    });
};
connect();
const db = mongoose.connection;
db.on('error', function(error){
    console.log("Error loading the db - "+ error);
});

db.on('disconnected', connect);
