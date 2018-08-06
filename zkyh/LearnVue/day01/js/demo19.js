new Vue({
    el: '#app1',
    data: {
        name: 'name',
        age: 'age',
        persons: [
            {name: '张三', age: 18},
            {name: '李四', age: 20},
            {name: '李华', age: 12},
            {name: '丽丽', age: 250}
        ]
    },
    methods: {
        add() {
            this.persons.push({name: this.name, age: this.age});
        },
        remove() {
            this.persons.pop();
        },
        reverse() {
            this.persons.reverse();
        },
        shift() {
            this.persons.shift();
        },
        unshift() {
            this.persons.unshift({name: this.name, age: this.age});
        }
    },
    computed: {}    //计算属性
});

/*
* 上述操作实现原理, Vue所有东西都是响应式的
* */