"use strict";
/*
 * @Author: your name
 * @Date: 2021-08-04 16:18:14
 * @LastEditTime: 2021-08-04 17:01:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/2_定义函数/index.ts
 */
// 1.函数声明法
// function run():string {
//   return 'run'
// }
// 2.匿名函数
var fun2 = function () {
    return 123;
};
function getInfo(str) {
    if (typeof str === 'string') {
        return "\u6211\u53EB\uFF1A" + str;
    }
    else {
        return "\u6211\u7684\u5E74\u9F84\u662F\uFF1A" + str;
    }
}
alert(getInfo(33));
