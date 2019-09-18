const http = require('http')
const fs = require('fs')
const querystring = require('querystring')
const urlLib = require('url')

// 接口
// /user?act=reg&user=aaa&pass=123456
// {"ok":false,"msg":"原因"}
// /user?act=login&user=aaa&pass=123456
// {"ok":true,"msg":"原因"}

//充当数据库用户表
let users ={}

http.createServer(function(req,res){
    //解析数据
    //读取文件
    let str = '';
    req.on('data',function(data){
        str += data;
    })
    req.on('end',function(){
        let obj = urlLib.parse(req.url)
        
        let url = obj.pathname
        let GET = querystring.parse(obj.query)
        let POST =querystring.parse(str)
// 区分接口，文件
        if(url=='/user'){//接口
            switch(GET.act){
                case 'reg':
                    //检查用户名是否有了
                    if(users[GET.user]){
                        res.write('{"ok":false,"msg":"此用户存在"}')
                    }else{
                        users[GET.user]=GET.pass
                        res.write('{"ok":true,"msg":"注册成功"}')
                    }
                    res.end()
                    break;
                case 'login':
                    //检查用户是否存在
                    //检查密码
                    if(users[GET.user]==null){
                        res.write('{"ok":false,"msg":"此用户不存在"}')                        
                    }else if(users[GET.user] != GET.pass){
                        res.write('{"ok":false,"msg":"密码错误"}')
                    }else{
                        res.write('{"ok":true,"msg":"登陆成功"}')                        
                    }
                    res.end()
                    break;
                default:
                    res.write('{"ok":false,"msg":"未知act"}')
                    res.end()
            }
        }else{//文件
            let filename = './www'+url
            fs.readFile(filename,function(err,data){
                if(err){
                    res.write('404')
                }else{
                    res.write(data)
                }
                res.end()
            })
        }
    })
}).listen('8099')