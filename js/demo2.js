//输入语句
window.alert("hello js")//写入警告框
document.write("hello js2")//写入html页面
console.log("hello js3")//写入浏览器控制台
//变量
//定义变量：var关键字
var test=20;
test="张三"//var 只适用于声明，变量可用于存储不同类型变量。var：定义的变量为全局变量，且可重复定义
//let关键字：可定义局部变量
let age=20;
age="李四";
//const关键字，用于定义常量
const pi=3.14
//数据类型，使用typeof运算符可查看变量的类型
alert(typeof test)
//运算符
/*
==：先判断类型是否一样，如果不一样先进行类型转换在进行比较
===：全等于号，先判断类型是否一样，如果不一样直接返回false
*/
//函数：定义函数使用function关键字
function add(a,b)
{
    return a+b;
}
var sum=add(3,4);
alert(sum)


