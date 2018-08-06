$('#btn1').click(function () {
    $('div span').css('background-color', '#00ffbf');   //后代选择器
});


$('#btn2').click(function () {
    $('div>span').css('font-size', '3em');  //子代选择器
});


$('#btn3').click(function () {
    $('.box+li').css('color', '#bf00ff');   //相邻兄弟选择器
});


$('#btn4').click(function () {
    $('.box~*').css('text-shadow', '5px 10px 2px #F00'); //一般兄弟选择器
});





































































