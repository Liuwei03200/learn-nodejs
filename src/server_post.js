const http = require('http')
const querystring = require('querystring')

http.createServer(function(req,res){
    //post - req
    //data  - 有一段就会发成一次 多次

    let i=0,str='';
    req.on('data',function(data){
        console.log(`第${i++}次收到数据`)
        str+=data
    });

    //end  数据全部到达 一次
    req.on('end',function(){
        let arr = querystring.parse(str)
        console.log(arr)
    });


}).listen(8099)




// POST数据接收：Post比get数据大的多
// 数据很大——分段
