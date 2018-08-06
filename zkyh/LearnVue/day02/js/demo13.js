new Vue({
    el: '#app1',
    data: {
        bgColor: '',
        color: ''
    },
    directives: {
        focus: {
            inserted(el) {
                el.focus();
            }
        },
        color: {
            bind (el, binding) {
                console.log('===========================获取自定义指令绑定值');
                console.log(binding.value.bgColor);
                console.log(binding.value.color);

                console.log('---------------------------字符串形式的指令表达式');
                console.log(binding.expression);

                el.style.backgroundColor = `${binding.value.bgColor}`;
                el.style.color = `${binding.value.color}`;
            }
        }
    }
});