//工厂函数
function addClickListenRemove(delBtn) {
    delBtn.onclick = function () {
        let tr = this.parentElement.parentElement;
        let ret = window.confirm(`确定删除? ---> ${tr.firstElementChild.innerText}`);
        if (ret) {
            tr.remove();
        }
    }
}

//删除
let delBtns = document.querySelectorAll('.del');    //根据CSS选择器, 查找DOM对象
for (let i = 0; i < delBtns.length; i++) {
    addClickListenRemove(delBtns[i]);
}

//添加
let tj = document.getElementById('tj');
tj.type = 'button';    //button默认type=submit
tj.onclick = function () {
    //获取输入内容
    let nameValue = document.getElementById('name').value;
    let emailValue = document.getElementById('email').value;
    let salaryValue = document.getElementById('salary').value;

    if (nameValue && emailValue && salaryValue) {   //避免提交空串    ~~~>    即使input标签设置required属性, 表单不会提交, 但JavaScript事件被触发, 依然会执行
        /*
        实践发现
            1.仅靠H5属性(eg. require, type=xxx), 不能完全满足需求, 因JavaScript事件也被触发了
                eg.email框中非法email地址也会添加
         */

        //创建元素节点
        let nameTd = document.createElement('td');
        let emailTd = document.createElement('td');
        let salaryTd = document.createElement('td');
        let delTd = document.createElement('td');
        let delBtn = document.createElement('button');

        nameTd.innerText = `${nameValue}`;
        emailTd.innerText = `${emailValue}`;
        salaryTd.innerText = `${salaryValue}`;
        delBtn.innerText = 'Delete';

        /*方式二
        let nameTdTxt = document.createTextNode(nameValue);
        let emailTdTxt = document.createTextNode(emailValue);
        let salaryTdTxt = document.createTextNode(salaryValue);
        let delBtnTxt = document.createTextNode('Delete');
        nameTd.append(nameTdTxt);
        emailTd.append(emailTdTxt);
        salaryTd.append(salaryTdTxt);
        delBtn.append(delBtnTxt);*/

        //方式三: innerHTML大法好...



        addClickListenRemove(delBtn);     //添加事件监听

        delTd.append(delBtn);   //尾追加


        let tr = document.createElement('tr');
        tr.append(nameTd, emailTd, salaryTd, delTd);    //ParenNode接口方法

       /* let table = document.querySelector('table');    //根据CSS选择器, 查找DOM对象
        table.append(tr);   //尾追加*/

       //浏览器会自动添加tbody, 导致上述添加tr都在tbody外, 实际上应该作为tbody子标签存在
        let tbody = document.querySelector('tbody');
        tbody.append(tr);

        /*innerHTML大法, 好!!!
        let tbody = document.querySelector('tbody');
        tbody.innerHTML += `
        <tr>
            <td>${nameValue}</td>
            <td>${emailValue}</td>
            <td>${salaryValue}</td>
            <td><button>Delete</button></td>
        </tr>
        `;*/

    }
};
// tj.type = 'submit';    //恢复默认type值
















































