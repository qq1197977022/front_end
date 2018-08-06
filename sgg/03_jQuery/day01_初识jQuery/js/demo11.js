$('#btn1').click(function () {
    let obj = {
        'name':'杨一帆',
        'age':18,
        'addr':'china',
        run: function () {
            console.log(`${this.name} is runing...`);
        }
    };
    let arr = [1, 2, 3, 'A', 'BCD', true];

    console.log('============对象============');
    $.each(obj, function (k, v) {
        console.log(`${k} : ${v}`);
    });
    console.log('============数组============');
    $.each(arr, function (i, v) {
        console.log(`${i} : ${v}`);
    });
});


$('#btn2').click(function () {
    let input = prompt('请输入:');
    console.log(`'${input}'`);
    console.log(`'${$.trim(input)}'`);
});


$('#btn3').click(function () {
    let obj = {};
    let arr = [];
    let fun = function(){};
    let n = 3;
    console.log($.type(obj), $.type(arr), $.type(fun), $.type(n));
});


$('#btn4').click(function () {
    let jQ_btns = $('button');
    let arr = [];
    console.log(jQ_btns.length, $.isArray(jQ_btns));
    console.log(arr.length, $.isArray(arr));
});


$('#btn5').click(function () {
    let fun = function () {};
    console.log($.isFunction(fun), $.isFunction($), $.isFunction(jQuery));
});

$('#btn6').click(function () {
    console.log('======JSON格式一======');
    let str1 = '{"name":"杨一帆", "age":18, "addr":"china"}';  //JSON格式一: 键值对集
    console.log(str1, $.type(str1));
    let json1 = $.parseJSON(str1);  //解析为JavaScript数据类型 ~ Object
    console.log(json1, $.type(json1));

    console.log('======JSON格式二======');
    let str2 = '["name", "age", "addr"]';   //JSON格式二: 值集
    console.log(str2, $.type(str2));
    let json2 = $.parseJSON(str2);  //解析为JavaScript数据类型 ~ Array
    console.log(json2, $.type(json2));
    /*
    * 参见
    *   1.http://json.org/json-zh.html
    *   2.sgg\02_JavaScript\01_JS基础\day08_JSON\demo01_JSON.html
    * */
});
















































