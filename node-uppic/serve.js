var http = require('http');
var url = require("url");
// var querystring = require("querystring");

function start(requestHandler,route){
    http.createServer(function(request,response){
        console.log('reqsuest is received! ');
        // request 处理
        var pathname = url.parse(request.url).pathname;
        console.log  ("this pathname is "+ pathname);

        var content = route(requestHandler,pathname);

        // response 返回
        response.writeHead(200,{"Content-Type":"text/plain"})
        response.write(content);
        response.end();
    }).listen(8880);
    console.log('serve has started');
}


exports.start = start;