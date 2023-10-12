

var flag = true;
function once() {
    if (flag) {
        console.log("我被调用, 只调用一次");
        flag = false;
        // window.aplayers[0].play()
        // console.log(window.aplayers)
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
    setTimeout(() => {
        waterfall('#waterfall')
    }, 100);

    console.log(options)
    const loc =options.srcElement.location

    if(loc.pathname.indexOf('/messageboard') !=-1){
        const param = loc.search.split('=')[1]
        if(param && param.length !=0){
            setTimeout(() => {
                let textera = document.querySelector('#wl-edit')
                textera.focus()
                // 在吧内容给填上
                textera.value = '>'+" "+decodeURIComponent(param) +'\n\n'
            }, 200);
        }
    }
}


function jumpToComment(text){
    ///跳转到评论, 并输入
    console.log('跳转评论')    
     let str = '/messageboard/'+'?msg='+text
     console.log(str)
     window.location.href += str
}