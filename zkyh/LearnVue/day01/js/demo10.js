let vm = new Vue({
    el: '#app1',
    data: {
        fun: function () {
            alert('事件触发');
        }
    }
});

new Vue({
    el: '#app2',
    data: {
        fun: function (arg) {
            alert(`事件触发\n${arg}`);
        }
    }
});

new Vue({
    el: '#app3',
    data: {
        fun: function () {
            alert('事件触发');
        }
    }
});

