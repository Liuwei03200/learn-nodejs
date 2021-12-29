var server = require("./serve.js");
var router = require("./router");
var requestHandler = require("./requestHandler");


var handle = {}
handle['/'] = requestHandler.start;
handle['/start'] = requestHandler.start;
handle['/upload'] = requestHandler.upload;

server.start(handle,router.route);