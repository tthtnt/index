function init() {
    // 获取li数组
    var patent = document.getElementById('patent');
    var ul = document.getElementById('ul');
    var li = ul.getElementsByTagName('li');
    var div = ul.getElementsByTagName('div');
    // console.log(div);
    oPrev = document.getElementById('prev');
    oNext = document.getElementById('next');
    // 建立一个空数组
    var arr = [];

    for (var i = 0; i < li.length; i++) {
        var rotate;
        // var oImg = li[i].getElementsByTagName('img')[0];
        switch (i) {
            case 0:
                rotate = -90;
                break;
            case 1:
                rotate = -30;
                break;
            case 2:
                rotate = -15;
                break;
            case 3:
                rotate = 0;
                break;
            case 4:
                rotate = 15;
                break;
            case 5:
                rotate = 30;
                break;
            case 6:
                rotate = 90;
                break;
        };

        arr.push([parseInt(getStyle(li[i], 'left')), parseInt(getStyle(li[i], 'bottom')),
            getStyle(li[i], 'zIndex'), rotate
        ]);
    }
    // 点击事件
    // console.log(oPrev);
    oPrev.onclick = function moveTP() {
        // console.log("kaishi");
        arr.push(arr[0]);
        arr.shift();
        // console.log(arr);
        for (var i = 0; i < li.length; i++) {

            li[i].style.zIndex = arr[i][2];
            startMove(li[i], arr[i][0], arr[i][1], arr[i][3]);
        }

    }
    oNext.onclick = function moveTN() {
        arr.unshift(arr[arr.length - 1]);
        arr.pop();
        for (var i = 0; i < li.length; i++) {

            li[i].style.zIndex = arr[i][2];
            startMove(li[i], arr[i][0], arr[i][1], arr[i][3]);
        }
    }
    patent.onclick = function(event){
        // console.log(event.target.className);
        for(var i = 0;i < div.length;i++){
            div[i].style.opacity = 0;
        }
        if(event.target.className == 'patent' ){
            event.target.nextElementSibling.style.opacity = 1;
        }
        
        // console.log(event.target.nextElementSibling);
        // console.log(event.currentTarget);
        // console.log(event.currentTarget.nextElementSibling);
    }
    // console.log(arr);
    // console.log(li[0].currentStyle['width']);
    // console.log(getComputedStyle(li[0], null)['bottom']);
}

function getStyle(obj, name) {
    if (obj.currentStyle) {
        return obj.currentStyle[name];
    } else {
        return getComputedStyle(obj, false)[name];
    }
}

function startMove(obj, left, bottom, rotate) {

    obj.style['left'] = left + 'px';
    obj.style['bottom'] = bottom + 'px';
    obj.style.transform = 'rotate(' + rotate + 'deg)';

}
function scrollLink(){
    var top = $('#top').offset().top;
    var company = $('#cp-btn').offset().top;
    var team = $('#tm-btn').offset().top;
    $('.top').click(function(){
        $('html,body').animate({scrollTop:top},1000);
    })
    $('.cp-btn').click(function(){
        $('html,body').animate({scrollTop:company},1000);
    })
    $('.tm-btn').click(function(){
        $('html,body').animate({scrollTop:team},1000);
    })
}
window.onload = function(){
    init();
    scrollLink();
}
