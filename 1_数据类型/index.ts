/*
 * @Author: your name
 * @Date: 2021-08-04 13:50:39
 * @LastEditTime: 2021-08-04 15:05:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/index.ts
 */

// 1.boolean
let flag:boolean = true;
// flag = 132   // 报错

// 2.nuber
let num:number = 123;
num = 456
// num = '345'  //错误

// 3.字符串类型
let str:string = 'ts'
str = 'hello'

// 4.数组类型  ts定义数组有两种方式
// let arr:number[] = [11,22,33]
// console.log(arr)

// let arr1:Array<number> = [1,2,3]
// console.log(arr1)

// 5.元祖类型（tuple）属于数组的一种
let arr:[number,string] = [1,'2']

// 6.枚举类型
enum Flag {success =1, error = 2}
let f:Flag = Flag.success

enum Color {blue,red,'orange'}
let c:Color = Color.blue


