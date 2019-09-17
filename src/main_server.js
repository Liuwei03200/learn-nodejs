const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

let server = http.createServer(function(req, res){
    //get
        let obj = urlLib.parse(req.url,true)
        let url = obj.pathname
        const GET = obj.query

    //post
        let str = '',POST={}
        req.on('data',function(data){
            str += data; 
        })
        req.on('end',function(){
            POST= querystring.parse(str)
            
            
            console.log(url,GET,POST);
        })
    //文件请求
    let file_name = './www'+url
    fs.readFile(file_name,function(err,data){
        if(err){
            res.write('404')
        }else{
            res.write(data)
        }
    })
})

server.listen('8099')