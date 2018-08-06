let d1 = document.getElementById('d1');
let d3 = document.getElementById('d3');
let leftBtn = document.getElementById('leftBtn');
let stopBtn = document.getElementById('stopBtn');
let rightBtn = document.getElementById('rightBtn');

function move(obj, speed) {
    let offsetLeft = obj.offsetLeft;
    obj.interID = window.setInterval(function () {
        offsetLeft += speed;

        if (offsetLeft <= 0) {  //边界控制
            offsetLeft = 0;
            window.clearInterval(obj.leftInterID);
        } else if (offsetLeft >= 800) {
            offsetLeft = 800;
            window.clearInterval(obj.rightInterID);
        }

        obj.style.marginLeft = `${offsetLeft}px`;
        
        console.log(`leftInterID = ${obj.leftInterID}\trightInterID = ${obj.rightInterID}\tinterID= ${obj.interID}`);
    }, 20);

    if (speed < 0) {
        obj.leftInterID = obj.interID;
    } else if (speed > 0) {
        obj.rightInterID = obj.interID;
    } else {    //speed=0, 无现象无意义, 且占用资源
        window.clearInterval(interID);
    }
}


function init(obj) {
    obj.leftInterID = 8080;
    obj.rightInterID = obj.leftInterID--;
    return obj;
}
function moveLeft(obj, speed) {
    window.clearInterval(obj.rightInterID);
    if (obj.leftInterID !== obj.interID)    //避免多次创建间歇定时器
        move(obj, -speed);
}
function moveRight(obj, speed) {
    window.clearInterval(obj.leftInterID);
    if (obj.rightInterID !== obj.interID)
        move(obj, speed);
}
function stop(obj) {
    window.clearInterval(obj.leftInterID);
    window.clearInterval(obj.rightInterID);
    //避免按下停止按钮后, 只有单击反向移动按钮才能继续原方向移动
    obj.leftInterID = 8080;
    obj.rightInterID = obj.leftInterID--;
}


d1 = init(d1);
d3 = init(d3);

leftBtn.onclick = function () {   //左移
    moveLeft(d1, 10);
    moveLeft(d3, 5);
};


stopBtn.onclick = function () { //停止
    stop(d1);
    stop(d3);
};

rightBtn.onclick = function () {   //右移
    moveRight(d1, 10);
    moveRight(d3, 5);
};






































































