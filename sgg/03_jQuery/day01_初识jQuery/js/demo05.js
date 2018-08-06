$('#btn1').click(function () {
    let jQ_obj = $('button');
    console.log(jQ_obj.length);
});


$('#btn2').click(function () {
    console.log($(this).text());
    console.log('========================');

    let jQ_obj = $('button');
    console.log(jQ_obj.get(1).innerText);
    console.log('========================');
    console.log(jQ_obj[1].innerText);
});


$('#btn3').click(function () {
    let jQ_obj = $('button');

    console.log('=================方式一=================');
    $.each(jQ_obj, function (i, domEle) {
        console.log(`${i}\t${domEle.innerText}`);
    });

    console.log('=================方式二=================');
    $.each(jQ_obj, function () {
        console.log(this.innerText);
    });

    console.log('=================方式三=================');
    console.log(jQ_obj.text());
});


$('#btn4').click(function () {
    let btn3 = document.getElementById('btn3');
    let jQ_btn3 = $('#btn3');
    let jQ_btns = $('button');
    //index()方法, 用法一
    console.log(jQ_btn3.index('button'));   //selector参数

    //index()方法, 用法二
    console.log(jQ_btns.index(btn3));   //element参数
    console.log(jQ_btns.index(jQ_btn3));    //element参数
    console.log(jQ_btns.index(jQ_btns));    //如果是jQuery对象, 搜索该jQuery对象中的第一个元素
    /*index()用法总结
    * 参数分类
    *   1.selector: 表示jQuery collection并在其中搜索元素下标
    *   2.element: 要搜索的DOM element 或 jQuery object第一个元素
    * */
});

































































