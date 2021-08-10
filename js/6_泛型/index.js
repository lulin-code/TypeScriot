"use strict";
/*
 * @Author: 卢林
 * @Date: 2021-08-10 09:44:28
 * @LastEditors: 卢林
 * @LastEditTime: 2021-08-10 11:29:18
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
var MinClass = /** @class */ (function () {
    function MinClass() {
        this.list = [];
    }
    MinClass.prototype.add = function (num) {
        this.list.push(num);
    };
    MinClass.prototype.min = function () {
        var minNum = this.list[0];
        for (var i = 0; i < this.list.length; i++) {
            if (minNum > this.list[i]) {
                minNum = this.list[i];
            }
        }
        return minNum;
    };
    return MinClass;
}());
var m1 = new MinClass();
m1.add(3);
m1.add(6);
console.log(m1.min());
