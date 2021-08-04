/*
 * @Author: your name
 * @Date: 2021-08-04 13:50:39
 * @LastEditTime: 2021-08-04 16:02:19
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
let arr:number[] = [11,22,33]
console.log(arr)

let arr1:Array<number> = [1,2,3]
console.log(arr1)

let arr2:any[] = [1,'2',{'name':'xiaoli'}]
console.log(arr2)

// 5.元祖类型（tuple）属于数组的一种
let arr4:[number,string] = [1,'2']

// 6.枚举类型
enum Flag {success =1, error = 2}
let f:Flag = Flag.success

enum Color {blue,red,'orange'}
let c:Color = Color.blue

// 7.任意类型
let num1:any=123;
num1 = true;// 不报错

// 8.null 和 undefined 其他类型的子类型

let num2:undefined = undefined
console.log(num2)

let num4:null 
num4 = null
// 一个元素可能是number类型，可能是null或者undefined
let num5:number | undefined | null

// 9.void 表示没有任何类型，一般用于定义方法的时候没有返回值
function run():void {
  console.log('run')
}

// 10.never类型，代表从来不会出现的值，是其他类型（包括null‘和undefined）的子类型，代表从不会出现的值
let a:never;






