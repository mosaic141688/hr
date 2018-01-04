const express = require("express");
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const userIO = require('./userIO')
app.use(bodyParser.urlencoded({extended: true}));

const user = require('./user')

io.on("connection", function (socket) {
    console.log("SOCKET CONNECTED")
    userIO.forEach(uio => socket.on(uio.request, async val => {
        try {
            let value = await  uio.call_back(val)
            console.log('Handling Success')
            socket.emit(uio.response, value)
        }
        catch(e) {
            let error =JSON.stringify(e.toString())
            console.log('Hanling Error',error)
            socket.emit('err', error)
        }
    })
)
})

//user.updateUser({query:{employment_number:'1234'},update:{second_name:'mosaic141688'}}).catch(console.log).then(console.log)

app.use(express.static('./'));

http.listen(3000, () => console.log("App listening"));