function start(){
    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }
    console.log('handle is start!');
    sleep(10000);
    return 'Hello Start!'
}
function upload(){
    console.log('handle is upload');
    return 'Hello Upload!'
}

exports.start = start;
exports.upload = upload;