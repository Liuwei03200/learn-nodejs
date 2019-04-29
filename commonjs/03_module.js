//第一  commonjs 引入内置模块；
const path = require('path');
console.log(path.join(__dirname,__filename));
//第二 引入相对路径 或者绝对路径

//第三引入 文件夹模块
//1、首先到根目录的package，json文件中去找 main的配置节点

//第四 自定义模块 第一次最慢 第二次有缓存
const stringW = require('string-width');
var num = stringW('lalla,测试一下自定义模块；');
console.log(num);
console.log(module.paths);
 