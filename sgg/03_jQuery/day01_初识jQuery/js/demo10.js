$('#btn1').click(function () {
    $('input:disabled').css('background-color', '#F00');
});


$('#btn2').click(function () {
    console.log($('input[type=checkbox]:checked').length);
});


$('#btn3').click(function () {
    console.log($('select').val());

    let jQ_opt = $('option:checked');
    console.log(jQ_opt.val());
    console.log(jQ_opt.text());
});





















































































