const http = require('http');

let server = http.createServer(function(request,response){
    // console.log('有人来了')
    console.log(request.url);
    switch(request.url){
        case '/a.html':
            response.write('11111111111111111');
            break;
        case '/b.html':
                response.write('22222222222222');
            break;
        default:
                response.write('404');
            break;
    }
    // response.write("abc");
    response.end();

})
//监听
//端口
server.listen(8898)

