const http = require('http')
const express = require('express')
const {Server} = require('socket.io')
const path = require('path')

const app = express()
const server = http.createServer(app)
const io = new Server(server);


//handle socket-io request

io.on("connection", (socket) => {
    socket.on('message',(message)=>{
        io.emit('message',message)
    })
});


app.use(express.static(path.resolve('./public')))
app.get('/', (req,res)=>{
    return res.send('/public/index.html')
})



server.listen(9000,()=>{
    console.log("Server is started at port 9000")
})