function route(requestHandler,pathname){
    console.log("this route name ="+ pathname);
    if(typeof requestHandler[pathname] == 'function' ){
        return  requestHandler[pathname]();
    }else{
        console.log("No request handler found for " + pathname);
        return "404 Not found";
    }
}
exports.route = route;