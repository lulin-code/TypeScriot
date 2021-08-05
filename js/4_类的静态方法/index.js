"use strict";
/*
 * @Author: your name
 * @Date: 2021-08-05 10:29:36
 * @LastEditTime: 2021-08-05 14:46:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/4_类的静态方法/index.ts
 */
// 1.静态方法
// class Person {
//   name:string
//   static sex:string = '男'
//   constructor(name:string) {
//     this.name = name
//   }
//   run():void{
//     alert(`${this.name}在运动`)
//   }
//   work():void{
//     alert(`${this.name}在工作`)
//   }
//   static print(){//静态方法 无法直接调用类里面的属性
//     // alert(`静态方法 ${this.age}`)   
//     alert(`静态方法 `) 
//     alert(`静态方法 ${Person.sex}`)   //正确获取静态属性的方法
//   }
// }
// let p = new Person('张飞')
// Person.print()  
// 2.多态
// class Animal {
//   name:string
//   constructor(name:string) {
//     this.name = name
//   }
//   eat(){
//     console.log('吃的方法')
//   }
// }
// class Dog extends Animal{
//   constructor(name:string) {
//     super(name)
//   }
//   eat(){
//     console.log(`${this.name}吃肉`)
//   }
// }
// class Cat extends Animal {
//   constructor(name:string) {
//     super(name)
//   }
//   eat(){
//     console.log(`${this.name}吃粮食`)
//   }
// }
// 3.抽象方法、抽象类
/**
  ts中的抽象类，它是提供其他类继承的基类，不能直接被实例化
  用abstract关键字定义抽象类和抽象方法，抽象类中的抽象方法不包含具体实现并且必须在派生类中实现
  abstract 抽象方法只能放在抽象类中
  抽象类和抽象方法用来定义标准，基类要求他的子类必须包含某种方法
  抽象方法只能出现在抽象类中
  抽象类中必须包含至少一个抽象方法，不然没有意义
 */
// abstract class Animal {
//    name:string
//    constructor(name:string) {
//     this.name = name
//    }
//    abstract eat():any;
//    run(){
//      console.log('实例方法可以不实现')
//    }
// }
// // let a = new Animal('狗')    //错误写法
// class Dog extends Animal {
//   // 抽象类的子类必须实现抽象类里面的抽象方法
//   constructor(name:string) {
//     super(name)
//   }
//   eat(){
//     console.log(`${this.name}吃粮食`)
//   }
// }
