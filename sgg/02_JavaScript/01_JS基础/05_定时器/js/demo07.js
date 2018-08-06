let d1 = document.getElementById('d1');
let leftBtn = document.getElementById('leftBtn');
let stopLRBtn = document.getElementById('stopLRBtn');

let incWidthBtn = document.getElementById('incWidthBtn');
let stopWidthBtn = document.getElementById('stopWidthBtn');
let decWidthBtn = document.getElementById('decWidthBtn');

let changeBtn = document.getElementById('changeBtn');

function init(obj, speed) {
    obj.speed = speed;

    obj.leftInterID = 8080;
    obj.rightInterID = 8081;

    obj.incWidthInterID = 8080;
    obj.decWidthInterID = 8081;

    return obj;
}
function left(obj, callback) {
    window.clearInterval(obj.rightInterID);

    let offsetLeft = obj.offsetLeft;

    obj.LRInterID = window.setInterval(function () {
        console.log('<-------------------------');

        offsetLeft -= obj.speed;

        if (offsetLeft <= 0) {
            offsetLeft = 0;
            window.clearInterval(obj.LRInterID);

            callback && callback(obj);  //实参有回调函数则调用, 没有则不调用
        }

        obj.style.marginLeft = `${offsetLeft}px`;
    }, 10);

    obj.leftInterID = obj.LRInterID;
}
function right(obj, callback) {
    window.clearInterval(obj.leftInterID);

    let innerWidth = window.innerWidth - obj.clientWidth;
    let offsetLeft = obj.offsetLeft;

    obj.LRInterID = window.setInterval(function () {
        console.log('------------------------>');

        offsetLeft += obj.speed;

        if (offsetLeft >= innerWidth) {
            offsetLeft = innerWidth;
            window.clearInterval(obj.LRInterID);

            callback && callback(obj);
        }

        obj.style.marginLeft = `${offsetLeft}px`;
    }, 10);

    obj.rightInterID = obj.LRInterID;
}
function stopLR(obj) {
    window.clearInterval(obj.leftInterID);
    window.clearInterval(obj.rightInterID);

    obj.leftInterID = 8080; //复位, 避免按下停止按钮后, 必须按下反方向键才能继续原方向移动
    obj.rightInterID = 8081;
}
function incWidth(obj) {
    window.clearInterval(obj.decWidthInterID);

    let width = obj.clientWidth;

    obj.widthInterID = window.setInterval(function () {
        console.log('<<<------>>>');

        if (width >= 800) {
            width = 800;
            window.clearInterval(obj.widthInterID);
        }

        width += obj.speed;
        obj.style.width = `${width}px`;
    }, 30);

    obj.incWidthInterID = obj.widthInterID;
}
function stopWidth(obj) {
    window.clearInterval(obj.incWidthInterID);
    window.clearInterval(obj.decWidthInterID);

    obj.incWidthInterID = 8080; //复位, 避免按下停止按钮后, 必须按下反方向键才能继续原方向增长
    obj.decWidthInterID = 8081;
}
function decWidth(obj, callback) {
    window.clearInterval(obj.incWidthInterID);

    let width = obj.clientWidth;

    obj.widthInterID = window.setInterval(function () {
        console.log('>>>------<<<');

        if (width <= 15) {
            width = 15;
            window.clearInterval(obj.widthInterID);

            callback && callback(obj);
        }

        width -= obj.speed;
        obj.style.width = `${width}px`;
    }, 30);

    obj.decWidthInterID = obj.widthInterID;
}


d1 = init(d1, 10);  //初始化

leftBtn.onclick = function () {
    if (d1.leftInterID !== d1.LRInterID)  //避免创建多个间歇定时器
        left(d1);
};
rightBtn.onclick = function () {
    if (d1.rightInterID !== d1.LRInterID)
        right(d1);
};
stopLRBtn.onclick = function () {
    stopLR(d1);
};


incWidthBtn.onclick = function () {
    if (d1.incWidthInterID !== d1.widthInterID)
        incWidth(d1);
};
stopWidthBtn.onclick = function () {
    stopWidth(d1);
};
decWidthBtn.onclick = function () {
    if (d1.decWidthInterID !== d1.widthInterID)
        decWidth(d1);
};

changeBtn.onclick = function () {   //不受控制原因: 类似于并发访问, 共享数据竞争
    right(d1, function () {
        decWidth(d1, function () {
            left(d1, function () {
                incWidth(d1);
            });
        });
    });
};






















































































