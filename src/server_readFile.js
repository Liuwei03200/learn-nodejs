const http = require('http');
const fs = require('fs');

let server = http.createServer(function(req,res){
    console.log(req.url)
    let fileName = './www'+req.url
    fs.readFile(fileName,function(err,data){
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
        res.end()
    });
});

server.listen(8099)