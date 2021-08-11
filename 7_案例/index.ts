/*
 * @Author: 卢林
 * @Date: 2021-08-11 11:33:56
 * @LastEditors: 卢林
 * @LastEditTime: 2021-08-11 14:45:52
 * @Descripttion: 文件描述
 */

/**
 * @description: 实现TS封装统一操作Mysql Mongodb Mssql的底层库
 */

// 1.定义一个借口，用于提供各类数据库规范
interface DBI<T>{
  add(info:T):boolean;
  update(info:T,id:number):boolean;
  delete(info:T):boolean;
  get(id:number):any[];
}
// 2.定义一个操作mysql的类
class MysqlDb<T> implements DBI<T> {
  add(info:T):boolean {
    console.log(info);
    return true
  }
  update(info:T,id:number):boolean{
    console.log(`${info}--${id}`);
    return true
  }
  delete(info:T):boolean {
    console.log('成功')
    return true
  }
  get(id:number){
    console.log('id')
    return [1,2,3]
  }
}
// 定义一个User类和数据库进行映射
class User {
  username:string | undefined;
  password:string | undefined
}
let u = new User();
u.password = '1234';
u.username = '赵四'

let oMysql = new MysqlDb<User>()
oMysql.add(u);