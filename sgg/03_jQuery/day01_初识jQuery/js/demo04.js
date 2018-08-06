$('#demand1').click(function () {
    console.log($(this).text());
    $('<br> <input type="text" title="文本框">').insertAfter(this);
    // $(this).after('<br> <input type="text" title="文本框">');
    /*
    * 1.insertAfter(): 插入HTML元素
    * 2.after(): 插入内容
    * 3.显然: after > insertAfter
    * */
});


$('#demand2').click(function () {
    arr = [11, 22, 'A', 'B', 'CDE'];
    //jQuery实现
    $.each(arr, function (i, v) {
        console.log(`${i} : ${v}`);
    });
    console.log('=====================');
    //原生JS实现1
    for (let i = 0; i < arr.length; i++) {  //枚举
        console.log(`${i} : ${arr[i]}`);
    }
    console.log('*********************');
    //原生JS实现2
    for (i of arr) {    //迭代
        console.log(i);
    }
});

$('#demand3').click(function () {
    let input = prompt('请输入:');
    //jQuery实现
    console.log(`'${input}'`);
    console.log(`'${$.trim(input)}'`);
    console.log('=============================');

    //原生JS实现
    console.log(`'${input}'`);
    console.log(`'${input.trim()}'`);
});




































