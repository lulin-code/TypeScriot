"use strict";
/*
 * @Author: your name
 * @Date: 2021-08-04 13:50:39
 * @LastEditTime: 2021-08-04 16:30:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/index.ts
 */
// 1.boolean
var flag = true;
// flag = 132   // 报错
// 2.nuber
var num = 123;
num = 456;
// num = '345'  //错误
// 3.字符串类型
var str = 'ts';
str = 'hello';
// 4.数组类型  ts定义数组有两种方式
var arr = [11, 22, 33];
console.log(arr);
var arr1 = [1, 2, 3];
console.log(arr1);
var arr2 = [1, '2', { 'name': 'xiaoli' }];
console.log(arr2);
// 5.元祖类型（tuple）属于数组的一种
var arr4 = [1, '2'];
// 6.枚举类型
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = 2] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
var Color;
(function (Color) {
    Color[Color["blue"] = 0] = "blue";
    Color[Color["red"] = 1] = "red";
    Color[Color["orange"] = 2] = "orange";
})(Color || (Color = {}));
var c = Color.blue;
// 7.任意类型
var num1 = 123;
num1 = true; // 不报错
// 8.null 和 undefined 其他类型的子类型
var num2 = undefined;
console.log(num2);
var num4;
num4 = null;
// 一个元素可能是number类型，可能是null或者undefined
var num5;
// 9.void 表示没有任何类型，一般用于定义方法的时候没有返回值
// function run():void {
//   console.log('run')
// }
// 10.never类型，代表从来不会出现的值，是其他类型（包括null‘和undefined）的子类型，代表从不会出现的值
var a;
