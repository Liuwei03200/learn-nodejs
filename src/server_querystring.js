const http = require('http')
const querystring= require('querystring')

http.createServer(function(req,res){
    let json;
    let url;
    // /index.html?user=asd&pass=dfasd
    if(req.url.indexOf('?')!=-1){
        let arr = req.url.split('?')
        url = arr[0]
        json = querystring.parse(arr[1])
    }else{
        url =req.url
    }

    console.log(url,json)

    res.write('aaaaa')
    res.end()

}).listen(8099);