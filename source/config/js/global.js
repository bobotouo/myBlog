


var flag = true;
function once() {
    if (flag) {
        console.log("我被调用, 只调用一次");
        flag = false;
        window.aplayers[0].play()
    } else {
        return;
    }
}


document.addEventListener('mousedown',function(e){
    // console.log(e)
    // 自动播放 音乐
    if (window.aplayers.length>0) {
        // console.log(window.aplayers)
        once()
    }

})

document.addEventListener('touchend',function(){
    if (window.aplayers.length>0) {
        // console.log(window.aplayers)
        once()
    }
})