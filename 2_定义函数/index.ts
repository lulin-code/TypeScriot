/*
 * @Author: your name
 * @Date: 2021-08-04 16:18:14
 * @LastEditTime: 2021-08-04 17:17:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/2_定义函数/index.ts
 */
// 1.函数声明法
// function run():string {
//   return 'run'
// }

// 2.匿名函数
let fun2 = function ():number {
  return 123
}

// 3.定义方法传参
// function getInfo(name:string,age:number) {
//   return console.log(`${name} === ${age}`)
// }
// getInfo('卢林',30)

// let getInfo = function (name:string,age:number):string {
//   return `${name} === ${age}`
// }

// 4.没有返回值的方法
// function run():void {
//   console.log('run')
// }

// 5.方法的可选参数 (可选参数必须设置到参数的最后)
// let getInfo = function (name:string,age?:number):string {
//   return `${name} === ${age}`
// }
// getInfo('卢林')

// 6.默认参数
// let getInfo = function (name:string,age:number = 20) {
//   return console.log(`${name} === ${age}`)
// }
// getInfo('卢林')

// 7.剩余参数
// 三点运算符：接收不固定参数的（剩余参数）的值
// function sum(...result:number[]):number {
//   let sum = 0
//   for (let i = 0; i < result.length; i++) {
//    sum += result[i]
//   }
//   console.log(sum)
//   return sum
// }
// sum(1,2,3,4)

// 8.函数重载
// function getInfo(name:string):string; 
// function getInfo(age:number):string; 
// function getInfo(str:any):any {
//   if (typeof str === 'string') {
//     return `我叫：${str}`
//   }else {
//     return `我的年龄是：${str}`
//   }
// }
// alert(getInfo(33))
