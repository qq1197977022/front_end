new Vue({
    el: '#app1',
    data: {
        id: '',
        name: '',
        keywords: '',
        items: [
            {id: 1, name: '奔驰奔驰', ctime: new Date().toLocaleString()},
            {id: 2, name: '宝马马', ctime: new Date().toLocaleString()},
            {id: 3, name: '宝骏', ctime: new Date().toLocaleString()}
        ]
    },
    methods: {
        add() {
            let newCar = {id: this.id, name: this.name, ctime: new Date().toLocaleString()};
            this.items.push(newCar);
            this.id = this.name = '';
        },
        del(item) {
            /*this.items.some((item, i) => {  //箭头函数, this指向父级
                if (item.id === id) {
                    this.items.splice(i, 1);
                    return true;
                }
            });*/
            let delIndex = this.items.indexOf(item);
            this.items.splice(delIndex, 1);
        },
        search() {
            // return this.items.filter(item => item.name.indexOf(this.keywords) !== -1);
            return this.items.filter(item => item.name.includes(this.keywords));
        }
    }
});

















