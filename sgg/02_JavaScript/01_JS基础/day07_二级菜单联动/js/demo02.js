let lis = document.getElementsByClassName('title');
let uls = document.getElementsByTagName('ul');

for (let li of lis) {   //迭代 ~ for...in 枚举
    li.flag = true; //展开标识
    let ul = li.parentElement;
    let span = li.firstElementChild;
    li.onclick = function () {
        if (li.flag) {  //展开
            closeOthers(uls, ul);   //关闭其他

            changeHeight(ul, 5);   //展开当前
            li.flag = false;    //标识为打开状态
            span.style.backgroundImage = 'url(img/expanded.gif)';
        } else {    //闭合
            span.style.backgroundImage = 'url(img/collapsed.gif)';
            changeHeight(ul, -5);  //闭合当前
            li.flag = true; //标识为闭合状态
        }
    };
}
function closeOthers(uls, ul) {
    for (let u of uls) {
        if (u !== ul) {
            u.firstElementChild.flag = true;   //标识为闭合状态
            u.style.height = '26px';    //立刻闭合
        }
    }
}
function changeHeight(obj, speed) {
    let currH = obj.clientHeight;
    let timer = window.setInterval(function () {
        currH += speed;
        if (currH <= 26) {   //minHeight边界
            currH = 26;
            clearInterval(timer);
        }
        if (currH >= obj.childElementCount*26) {
            currH = obj.childElementCount*26;
            clearInterval(timer);
        }

        obj.style.height = `${currH}px`;
    }, 20);
}













/*
* 减少无效判断次数, 避免多间隔定时器竞争, 但同时增加了代码量
*   1.为什么效果不明显? ~ clear需要时间才能真正销毁时钟?
* */
/*let timer1, timer2;
if (speed > 0) {
    clearInterval(timer2);
    timer1 = window.setInterval(function () {

        currH += speed;
        if (currH > obj.childElementCount*26) {
            currH = obj.childElementCount*26;
            clearInterval(timer1);
        }
        obj.style.height = `${currH}px`;
    }, 20);
} else {
    clearInterval(timer1);
    timer2 = window.setInterval(function () {

        currH += speed;
        if (currH < 26) {
            currH = 26;
            clearInterval(timer2);
        }
        obj.style.height = `${currH}px`;
    }, 20);
}*/

