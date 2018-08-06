Vue.directive('bgcolor', function (el, binding) {   //钩子函数bind和update的简写
    el.style.backgroundColor = binding.value;
});

new Vue({
    el: '#app1',
    data: {

    },
    directives: {
        color(el, binding) {    //钩子函数bind和update的简写
            el.style.color = binding.value;
        }
    }
});