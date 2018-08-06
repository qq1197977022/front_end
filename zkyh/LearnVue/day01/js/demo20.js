new Vue({
    el: '#app1',
    data: {
        flag: true
    },
    methods: {
        toggle() {
            this.flag = !this.flag;
        }
    }
});