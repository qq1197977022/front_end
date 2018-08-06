let picDiv = document.getElementById('picDiv');
let navBtn = document.getElementById('navBtn').children;
let show = document.querySelector('span');
let flag = true;    //标识是否开启间歇定时器

picDiv.style.width = `${picDiv.childElementCount * 500}px`; //解耦, 随意添加图片


//自动轮播
function ATMove(obj) {
    let count = 1;
    obj.interID = window.setInterval(function () {
        show.innerText = `${count++}`;

        obj.marginLeft -= obj.speed;

        if (obj.marginLeft <= obj.minMarginLeft) {
            obj.marginLeft = obj.minMarginLeft;
            obj.speed = -obj.speed; //改变速度方向
        }

        if (obj.marginLeft >= 0) {
            obj.marginLeft = 0;
            obj.speed = -obj.speed; //改变速度方向
        }


        obj.style.marginLeft = `${obj.marginLeft}px`;

        if (obj.marginLeft !== 0 && obj.marginLeft % 500 === 0) {   //每轮播一张, 休眠1s
            window.clearInterval(obj.interID);  //清除当前间歇定时器

            if (flag)
                window.setTimeout(function () {
                        ATMove(obj);
                }, 1000);
        }
    }, 150);
}

//手动轮播
function MTMove(obj, index) {
    window.clearInterval(obj.interID);  //清除间歇定时器

    let marginLeft = -500*index;
    obj.style.marginLeft = `${marginLeft}px`; //设置外边距
    obj.marginLeft = marginLeft;
    if (flag) {
        window.setTimeout(function () {
            ATMove(obj);
            flag = true;
        }, 5000);
        flag = false;
    }
}

//初始化
function init(obj) {
    obj.marginLeft = 0; //初始外边距
    obj.speed = 50;
    obj.minMarginLeft = -picDiv.clientWidth + 500;  //最大偏移量

    return obj;
}

picDiv = init(picDiv);

window.onload = function () {   //页面加载完毕即执行
    ATMove(picDiv);

    for (let i = 0; i < navBtn.length; i++) {   //为子元素添加单击事件
        navBtn[i].index = i;    //按钮下标

        navBtn[i].onclick = function () {
            MTMove(picDiv, this.index);
        };
    }
};








































































