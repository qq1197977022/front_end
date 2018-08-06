new Vue({
    el: '#app1',
    data: {
        c1: '#F00',
        f1: '25px',
        obj1: {color: '#906', fontSize: '3em'},
        obj3: {fontSize: '5em'},
        obj4: {border: '2px solid #309'}
    },
    computed: {
        obj2: function () {
            return {color: '#906', fontSize: '3em', letterSpacing: '0.5em'}
        }
    }
});