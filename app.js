const projName = 'TI - AW';

const express = require('express')

const app = express()

const port = process.env.PORT || 8080

app.use(express.static("public"))

try {

    app.listen(port, '127.0.0.1')
    console.log('yo dawgs, now listening to port 127.0.0.1:8080')
} catch (error) {

    console.log(error)
}




// const http = require('http')
// const fs = require('fs')

// var server = http.createServer(function(req, res) {
//     console.log('request was made: ' + req.url)
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     var myReadStream = fs.createReadStream('src/_index.html', 'utf8') //__dirname + 
//     myReadStream.pipe(res)
// })


// server.listen(port, '0.0.0.0')