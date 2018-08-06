/*//1.在创建Vue实例对象前注册全局过滤器
Vue.filter('msgReplace1', function (msg) {
    return msg.replace(/单纯/g, '_邪恶_');
});*/

new Vue({
    el: '#app1',
    data: {
        msg: '曾经, 我也是一个单纯的少年, 单纯的我, 单纯的问, 谁是世界上最单纯的人?'
    },
    methods: {},
    computed: {},
    filters: {  //2.在组件选项中定义过私有滤器
        msgReplace1: function (msg) {
            return msg.replace(/单纯/g, '_邪恶_');
        },
        msgReplace2(msg) {  //ES6语法
            return msg.replace(/单纯/g, '__');
        },
        msgReplace3(msg, arg1, arg2) {  //ES6语法
            return msg.replace(/单纯/g, `${arg1}__${arg2}`);
        }
    }
});

