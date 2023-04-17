/*
* 实现原理：原型链继承法是运用了原型链的特性来实现
* 存在问题
* 1. 原型对象的所有属性被所有实例共享, 对引用类型属性里面的属性值所有实例均会被修改
* 2. 在创建子类型的实例时，无法向父类二次传递参数，只能在定义时进行参数传递
* 3. 无法实现多继承
* 4. 创建子类实例时，无法向父类构造函数传参
*/
function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.obj = {};
    this.arr = [];
}

function Child(name, age) {
    this.name = name;
    this.age = age;
}

console.log(' child constructor before : ', Child.prototype.constructor);

Child.prototype = new Parent(); // 修改了原型对象，原本它里面的construct指向的是它本身，现在指向了Parent

console.log(' child constructor after : ', Child.prototype.constructor);

const c = new Child('李四', 25);
c.name = '222'; // 不会修改到父类的基本数据类型的数据
c.obj.a = 1; // 父类非基本数据类型可以被修改，并且所有对象共享

console.log(' c.name : ', c.name); // Tom
console.log(' child.constructor : ', c.constructor === Child.prototype.__proto__.constructor); // true 此时子类的constructor已经别修改了，属性会直接沿着原型链找到new Parent()的__proto__的constructor属性

const c1 = new Child('张三', 27);

console.log(' c1 : ', c1);
c.arr[1] = 1;

console.log(' c.obj : ', c.obj, c.obj, c1.obj === c.obj);
console.log(' c.arr : ', c.arr, c1.arr, c.arr === c1.arr);

console.log(' ---- ', Child.prototype.constructor === Parent.prototype.constructor); // true
