"use strict";
/*
 * @Author: 卢林
 * @Date: 2021-08-06 11:34:14
 * @LastEditors: 卢林
 * @LastEditTime: 2021-08-06 15:54:52
 * @Descripttion: 文件描述
 */
// 1.属性接口
function printLabel(label) {
    console.log(label);
}
printLabel('泰迪');
// 2.定义了这个方法的参数是jsonObjec，而且必须有
function p(labObj) {
    console.log(labObj);
}
p({ label: '泰尼' });
function printName(name) {
    console.log(name.firstName + "---" + name.secondName);
}
// 调用方式一（下方调用方式是会报错的，interface定义的属性object只能包含firstName和secondName）
// printName({
//     age:20,
//     firstName: "张",
//     secondName: "三"
// })
// 调用方式二，下方引入其他的object即可忽略多余参数
var obj = {
    age: 20,
    firstName: "张",
    secondName: "三"
};
printName(obj);
// 可选参数
printName({ firstName: "张", });
var md5 = function (key, value) {
    return key + value;
};
