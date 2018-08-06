$('#btn1').click(function () {
    $('tr:odd').css('background-color', '#ffe5e5'); //CSS内联属性
    $('tr:even').css('background-color', '#bfff00');

});


$('#btn2').click(function () {
    $('tr:odd').attr('class', 'odd2');  //添加属性
    $('tr:even').attr('class', 'even2');


});


$('#btn3').click(function () {
    $('tr:odd').addClass('odd3');   //添加class属性
    $('tr:even').addClass('even3');
});







