const http = require('http')
const urll= require('url')

http.createServer(function(req,res){

    let obj =urll.parse(req.url,true) 
    let url = obj.pathname
    let GET = obj.query

    console.log(url,GET)

    res.write('aaaaa')
    res.end()

}).listen(8099);

// GET数据解析  
// 1.自己切
// 2.querystring
// 3.url