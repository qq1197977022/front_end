$('#btn1').click(function () {
    $('div:first').css('font-size', '3em');
});


$('#btn2').click(function () {
    $('.box:last').css('background-color', '#E66');
});


$('#btn3').click(function () {
    $('div:not(.box)').css('background-color', '#00ff40');
});


$('#btn4').click(function () {
    // $('li:gt(0):lt(2)').css({'color':'#4000ff', 'text-indent':'5em'});
    /*
    * 为什么不是li:gt(0):lt(3)?
    * 因为是逐步过滤
    *
    * 所以, li:lt(3):gt(0)写法更好
    * */
    $('li:lt(3):gt(0)').css({'color':'#4000ff', 'text-indent':'5em'});
});


$('#btn5').click(function () {
    $('li:contains(BBB)').css('text-decoration', 'line-through dashed #F00');
});


$('#btn6').click(function () {
    $('li:hidden').show();
    // $('li:hidden').css('display', 'list-item');

    //疑问: 通过visibility属性隐藏的元素无法操作???
});


$('#btn7').click(function () {
    $('li[title]').css('text-transform', 'lowercase');
});


$('#btn8').click(function () {
    $('li[title=hello]').css('border-style', 'dashed solid');
});














































