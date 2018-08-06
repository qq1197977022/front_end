let vm1 = new Vue({
    el: '#app1',
    data: {
        demo01: 'test1',
        demo02: 'active',
        demo03: 'red',
        flag: true,
        isRed: true,
        isItalic: false,
        isActive: true,
        obj1: {red: true, italic: true, active: true}
        /*
            1.内联定义属性值只能是true/ false
            2.引用Vue实例属性, 只能使用计算下述属性
        */
    },
    computed: { //计算属性
        obj2: function () {
            return {red: this.isRed, italic: this.isItalic, active: this.isActive}
        }
    }
});


