// $('#m10').click(function () {
//     $('#d1').toggle();
//     hide('#d2', '#d3');
//
//     let jQ_divs = $('div');
//     console.log(jQ_divs, jQ_divs.length);
//     let a = jQ_divs.not(jQ_divs[$(this).index()]);
//     console.log(jQ_divs, jQ_divs.length);
//     console.log(a, a.length);
//
// });
//
// $('#m30').click(function () {
//     $('#d2').toggle();
//     hide('#d1', '#d3');
// });
//
// $('#m50').click(function () {
//     $('#d3').toggle();
//     hide('#d1', '#d2');
// });
//
// function hide(sel1, sel2) {
//     $(sel1).hide();
//     $(sel2).hide();
// }


let jQ_divs = $('div');
$('li').click(function () {
    let tab = $(jQ_divs[$(this).index()]);
    let hides = jQ_divs.not(tab);  //移除当前Tab对应jQ_div对象
    hides.hide();
    tab.toggle();
});































































