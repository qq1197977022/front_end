$('#btn1').click(function () {
    // console.log($('div').attr('title'));
    console.log($('div').prop('title'));
});


$('#btn2').click(function () {
    $('div').attr('name', 'div');
    // $('div').prop('name', 'div');    //无效 ~ 看下述总结
});


$('#btn3').click(function () {
    $('div').removeAttr('title');
    // $('div').removeProp('title');    //无效
});


$('#btn4').click(function () {
    $('div').attr('class', 'div');
});


$('#btn5').click(function () {
    $('div').addClass('div');
});


$('#btn6').click(function () {
    $('div').removeClass('box');
});


$('#btn7').click(function () {
    /*let lis_jQ = $('li');
    console.log(lis_jQ.last().text());
    console.log(lis_jQ.last().html());*/

    let li_jQ = $('li:last');
    console.log(li_jQ.text());
    console.log(li_jQ.html());
});


$('#btn8').click(function () {
    // $('li').first().html('<h1>MMM</h1>');
    $('li:first').html('<h1>MMM</h1>');
});


$('#btn9').click(function () {
    // console.log($('input:text').val()); //过滤选择器
    console.log($('input[type=text]').val());   //属性选择器
});


$('#btn10').click(function () {
    // $('input:text').val('古天乐');  //过滤选择器
    $('input[type=text]').val('古天乐');   //属性选择器
});


$('#btn11').click(function () {
    // $('input:checkbox').attr('checked', 'checked');
    // $('input:checkbox').attr('checked', true);

    $('input:checkbox').prop('checked', true);
});


$('#btn12').click(function () {
    // $('input:checkbox').attr('checked', false);

    $('input:checkbox').prop('checked', false);
});
/*
* 关于11, 12总结
*   1.attr, prop正逆操作各自配对, 混合无效
*   2.attr会添加内联属性, prop看不到现象
*   3.区别
*     1.prop
*       1.固有属性
*       2.布尔属性
*     2.attr: 自定义属性
* */









































