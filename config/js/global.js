

var flag = true;
function once() {
    if (flag) {
        console.log("我被调用, 只调用一次");
        flag = false;
        window.aplayers[0].play()
        // window.aplayers[0].lrc.hide()
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

if (document.querySelector('#bber-talk')) {
    var swiper = new Swiper('.swiper-container', {
      direction: 'vertical', 
      loop: true,
      autoplay: {
      delay: 3000,
      pauseOnMouseEnter: true
    },
    });
  }



window.onpageshow = function(options){
    console.log('加载')
}


function jumpToComment(text){
    ///跳转到评论, 并输入

    console.log('跳转评论')
    let textera = document.querySelector('#wl-edit')
    // 在吧内容给填上
    textera.value = ' >'+text +'\n\n'
    textera.focus()
}