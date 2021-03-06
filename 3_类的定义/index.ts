/*
 * @Author: your name
 * @Date: 2021-08-04 17:34:05
 * @LastEditTime: 2021-08-05 13:58:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /TypeScript/3_类的定义/index.ts
 */

// 1.定义类
// class Person {
//   name:string
//   constructor(name:string){  //构造函数  实例化的时候触发
//     this.name = name
//   }
//   run():void{
//     alert(this.name)
//   }
//   getName():string{
//     return this.name
//   }
//   setName(name:string):void{
//     this.name = name
//   }
// }
// let p = new Person('张三')
// alert(p.getName())
// p.setName('李三')
// alert(p.getName())

// 2.实现继承
// class Person {
//   name:string
//   constructor(name:string) {
//     this.name = name
//   }
//   run():string{
//     return `${this.name}在跑步`
//   }
// }
// let p = new Person('李白')
// alert(p.run())

// class Web extends Person{
//   constructor(name:string){
//     super(name) //初始化父类的构造函数
//   }
//   work(){
//     alert(`${this.name}在工作`)
//   }
// }
// let w = new Web('杜甫')
// alert(w.run())
// w.work()

// 3.修饰符
/**
    public(默认的)： 公有 在类里面、子类类外边都可以访问
    protected：在类里面、子类里面可以访问、在类外部无法访问
    private：在类里面可以访问、子类、类外部没法访问
 */
// class Person {
//   name:string
//   protected age:number
//   private sex:string | undefined
//   constructor(name:string,age:number,sex:string) {
//     this.name = name
//     this.age = age
//     this.sex = sex
//   }
//   run():void{
//     console.log(`${this.name}--${this.age}---${this.sex}`)
//   }
// }
// let p = new Person('卢林',30,'男')
// console.log(p.sex) //protected 类外部无法访问
// console.log(p.age) //private 类外部无法访问

// class Web extends Person{
//   constructor(name:string,age:number,sex:string) {
//      super (name,age,sex)  //private 子类无法访问
//   }
// }
// let w = new Web('卢林',30,'男')
// w.run()
