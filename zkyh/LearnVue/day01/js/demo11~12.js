new Vue({
    el: '#app1',
    data: {
        msg: '别浪, 猥琐发育!'
    },
    methods: {
        /*start: function() {
            let start = this.msg.substring(0, 1);
            let end = this.msg.substring(1);
            this.msg = end + start;
        },*/
        /*start() {
            /!*ES6语法
            * 自动把start解析为属性名, 并添加function关键字
            * *!/
            window.clearInterval(this.iTimer);
            let _this = this;

            this.iTimer = window.setInterval(() => {  //箭头函数中this指向父级
                let start = _this.msg.substring(0, 1);
                let end = _this.msg.substring(1);
                _this.msg = end + start;
            }, 100);
        },*/
        start() {
            /*ES6语法
            * 自动把start解析为属性名, 并添加function关键字
            * */
            window.clearInterval(this.iTimer);

            this.iTimer = window.setInterval(() => {  //箭头函数中this指向父级
                let start = this.msg.substring(0, 1);
                let end = this.msg.substring(1);
                this.msg = end + start;
            }, 100);
        },
        stop: function () {
            window.clearInterval(this.iTimer);
            console.log(this.iTimer);
        }
    }
});