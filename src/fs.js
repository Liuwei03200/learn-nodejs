const fs = require('fs');

// 一、fs.readFile(文件名,回调函数 )

fs.readFile('aaa.text',function(err, data){
    // console.log(err);
    // console.log(data.toString());
})

// 二、fs.writeFile(文件名,内容,回调函数)

fs.writeFile('./www/aaa.text','aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',function(err){
    console.log(err)
})