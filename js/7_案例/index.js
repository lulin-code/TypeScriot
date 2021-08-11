"use strict";
/*
 * @Author: 卢林
 * @Date: 2021-08-11 11:33:56
 * @LastEditors: 卢林
 * @LastEditTime: 2021-08-11 14:45:52
 * @Descripttion: 文件描述
 */
// 2.定义一个操作mysql的类
var MysqlDb = /** @class */ (function () {
    function MysqlDb() {
    }
    MysqlDb.prototype.add = function (info) {
        console.log(info);
        return true;
    };
    MysqlDb.prototype.update = function (info, id) {
        console.log(info + "--" + id);
        return true;
    };
    MysqlDb.prototype.delete = function (info) {
        console.log('成功');
        return true;
    };
    MysqlDb.prototype.get = function (id) {
        console.log('id');
        return [1, 2, 3];
    };
    return MysqlDb;
}());
// 定义一个User类和数据库进行映射
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var u = new User();
u.password = '1234';
u.username = '赵四';
var oMysql = new MysqlDb();
oMysql.add(u);
