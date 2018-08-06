let vm = new Vue({
    el: '#app1',
    data: {
        msg: '插值表达式闪烁'
    }
});

vm = new Vue({
    el: '#app2',
    data: {
        msg: 'v-cloak解决插值表达式闪烁'
    }
});

vm = new Vue({
    el: '#app3',
    data: {
        msg: '更新元素textContent'
    }
});

vm = new Vue({
    el: '#app4',
    data: {
        msg: '<h2>更新元素innerHTML</h2>'
    }
});

