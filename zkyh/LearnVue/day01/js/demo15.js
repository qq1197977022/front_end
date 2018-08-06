new Vue({
    el: '#calc',
     data: {
         num1: '',
         num2: '',
         rest: '',
        operator: '*'
    },
    methods: {
        calc() {
            /*switch (this.operator) {
                case '+':
                    if (this.num1 === '' || this.num2 === '') {
                        alert('参数不能为空');
                    } else {
                        this.rest = parseFloat(this.num1) + parseFloat(this.num2);
                    }
                    break;
                case '-':
                     if (this.num1 === '' || this.num2 === '') {
                         alert('参数不能为空');
                     } else {
                        this.rest = this.num1 - this.num2;
                     }
                    break;
                case '*':
                    if (this.num1 === '' || this.num2 === '') {
                        alert('参数不能为空');
                    } else {
                        this.rest = this.num1 * this.num2;
                    }
                    break;
                case '/':
                    if (this.num2 === '0' || this.num2 === '') {
                        alert('分母非法');
                    } else if (this.num1 === '') {
                        alert('参数不能为空');
                    } else {
                        this.rest = this.num1 / this.num2;
                    }
                    break;
                default:
                    alert('...');
            }*/

            //逻辑不严谨
            this.rest = eval(`${parseFloat(this.num1)} ${this.operator} ${parseFloat(this.num2)}`)
        }
    }
});

