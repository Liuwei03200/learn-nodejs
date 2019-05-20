// 引入path模块
const path = require('path');

var strpath1 = "/home/a/index.html";
var strpath2 = "c:\\home\\index.html";

var a=path.basename(strpath1);
var b=path.basename(strpath1,'.html');
// console.log(a);
// console.log(b);

// console.log(path.delimiter);
// console.log(path.win32.delimiter);
console.log(path.dirname(strpath2));
console.log(path.dirname(__filename));








