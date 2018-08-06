new Vue({
    el: '#app1',
    data: {
        num: 5,
        str: 'abcDEF',
        items: ['one', 2, 'three', 'four', 5], //普通数组
        obj: {name: '杨一帆', age: 23, gender: 'male', addr: '郑州'},    //对象
        members: [  //对象数组
            {name: '杨一帆', age: 23, gender: 'male', addr: '郑州'},
            {name: '秦晴', age: 21, gender: 'female', addr: '北京'},
            {name: '范冰冰', age: 43, gender: 'female', addr: '郑州'},
            {name: '李晨', age: 55, gender: 'male', addr: '上海'}
        ]
    },
    methods: {},
    computed: {}
});