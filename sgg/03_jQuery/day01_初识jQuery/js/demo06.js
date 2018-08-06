$('#btn1').click(function () {
    let jQ_d1 = $('#d1');
    console.log(jQ_d1.text());
    jQ_d1.css({'background-color':'#00ffbf', 'border-style':'double solid dashed'})

    /*原生JS
    jQ_d1[0].style.backgroundColor = '#000';
    jQ_d1.get(0).style.backgroundColor = '#000';*/
});


$('#btn2').click(function () {
    let jQ_divs = $('div');
    jQ_divs.css('color', '#00bfff');
});


$('#btn3').click(function () {
    let jQ_boxs = $('.box');
    jQ_boxs.css('font-size', '3em');
});


$('#btn4').click(function () {
    let jQ_divSpans = $('div, span');
    jQ_divSpans.css('border-style', 'dashed solid double');
});


$('#btn5').click(function () {
    // let jQ_boxDivs = $('div[class="box"]');  //属性选择器
    let jQ_boxDivs = $('div.box'); //交集选择器
    jQ_boxDivs.css('text-shadow', '5px 10px 2px #F00');
});




























































