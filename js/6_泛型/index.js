"use strict";
/*
 * @Author: 卢林
 * @Date: 2021-08-10 09:44:28
 * @LastEditors: 卢林
 * @LastEditTime: 2021-08-11 09:40:13
 * @Descripttion: 泛型
 */
/**
 * @description: 泛型就是解决 类 接口 方法的重用性、以及对不特定数据类型的支持
 */
// 1.支持不特定的数据类型
// function getData<T>(value:T):T {
//   return value
// }
// getData<number>(123)
// getData<string>('123')
// function getData1<T>(value:T):any {
//   return value
// }
// getData1<number>(123)
// 2.最小堆算法，只支持number
// class MinClass {
//   list:number[] = []
//   add(num:number) {
//      this.list.push(num)
//   }
//   min():number{
//     let minNum = this.list[0]
//     for (let i = 0; i < this.list.length; i++) {
//       if (minNum > this.list[i]) {
//         minNum = this.list[i]
//       }
//     }
//     return minNum
//   }
// }
// let m = new MinClass()
// m.add(1)
// m.add(2)
// m.add(3)
// console.log(m.min());
// 3 泛型 输入类型跟输出类型相同
// class MinClass<T> {
//   list:T[] = []
//   add(num:T):void{
//     this.list.push(num)
//   }
//   min():T{
//     var minNum = this.list[0];
//         for(var i = 0;i<this.list.length;i++){
//             if(minNum>this.list[i]){
//                minNum=this.list[i];
//             }
//          }
//      return minNum;
//   }
// }
// let m1 = new MinClass<number>()
// m1.add(3)
// m1.add(6)
// console.log(m1.min());
// 4.泛型接口 写法1
// interface Config{
//   <T>(value:T):T;
// }
// let getData:Config = function <T>(value:T):T {
//   return value
// }
// getData<string>('张三')
// 5.泛型接口 写法2
// interface Config<T>{
//   (value:T):T
// }
// function getData<T>(value:T):T {
//   return value
// }
// getData<string>('li')
// 6.把类作为参数来约束数据传入的类型
// class User {
//   username:string | undefined;
//   password:string | undefined
// }
// class MySqlDb {
//   add(user:User):boolean {
//     console.log(user);
//     return true
//   }
// }
// let u = new User()
// u.username = '李三'
// u.password = '123'
// let Db = new MySqlDb()
// Db.add(u);
// 7.把类作为参数来约束数据传入的类型(泛型)
// 7.1将userinfo 添加到数据库
var MySqlDb = /** @class */ (function () {
    function MySqlDb() {
    }
    MySqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    return MySqlDb;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.username = '李白';
u.password = '123455';
var db = new MySqlDb();
db.add(u);
// 7.2 文章类添加到暑假库
var Article = /** @class */ (function () {
    function Article(params) {
        this.title = params.title;
        this.desc = params.desc;
        this.status = params.status;
    }
    return Article;
}());
var art = new Article({
    title: '分类',
    desc: '111',
    status: 1
});
var Db = new MySqlDb();
Db.add(art);
