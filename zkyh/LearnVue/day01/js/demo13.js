new Vue({
    el: '#app1',
    data: {
        msg: '点我'
    },
    methods: {
        divHandle() {
            console.log('inner div被单击');
        },
        btnHandle() {
            console.log('btn被单击');
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        msg: '点我',
    },
    methods: {
        divHandle() {
            console.log('内层div被单击');
        },
        btnHandle() {
            console.log('btn被单击');
        }
    }
});

new Vue({
    el: '#app3',
    data: {
        msg: '点我'
    },
    methods: {
        divHandle() {
            console.log('内层div被单击');
        },
        btnHandle() {
            console.log('btn被单击');
        }
    }
});

new Vue({
    el: '#app4',
    data: {
        msg: '点我'
    },
    methods: {
        divHandle() {
            console.log('内层div被单击');
        },
        btnHandle() {
            console.log('btn被单击');
        }
    }
});

new Vue({
    el: '#app5',
    data: {
      msg1: '绑定事件监听, 并阻止元素默认事件',
      msg2: '绑定事件监听, 但不阻止元素默认事件',
    },
    methods: {
        fun1() {
            console.log('绑定事件监听, 并阻止默认事件');
        },
        fun2() {
            console.log('绑定事件监听, 但不阻止默认事件');
        }
    }
});

new Vue({
    el: '#app6',
    data: {
      msg: '点我'
    },
    methods: {
        once() {
            console.log('事件触发');
        }
    }
});








