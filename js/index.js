"use strict";
/*
 * @Author: your name
 * @Date: 2021-08-04 13:50:39
 * @LastEditTime: 2021-08-04 15:05:38
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
// let arr:number[] = [11,22,33]
// console.log(arr)
// let arr1:Array<number> = [1,2,3]
// console.log(arr1)
// 5.元祖类型（tuple）属于数组的一种
var arr = [1, '2'];
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
