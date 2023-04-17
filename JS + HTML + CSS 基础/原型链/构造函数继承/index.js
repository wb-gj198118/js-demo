/*
    实现原理: 使用父类的构造函数来增强子类实例，等于是复制父类的实例属性给子类（没用到原型）
    优点
        1. 可以向父类传参
        2. 避免了引用类型属性被所有实例共享问题
    缺点
       1. 方法和属性只能写在构造函数中,因此不能实现函数复用 
       2. 只能继承父类的实例属性和方法，不能继承原型属性/方法
 */

// 父类
function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.obj = {};
    this.arr = [];
    this.hello = function () {
        console.log(' hello ');
    }
}

Parent.prototype.sayHello = function () {
    console.log(' hello ');
}

// 子类
function Child(name, age) {
    Parent.call(this, name, age);
}

// 子类
function Child1(name, age) {
    Child.call(this, name, age);
}

let child = new Child("Tom", 22);
child.obj.a = 1;
child.hello();
console.log(' child.name : ', child.name); // 'Tom'
console.log(' child.sayHello : ', child.sayHello); // 无法继承父类原型对象，子类无法访问父类的原型对象，因此，输出 undefined

let child1 = new Child('李四', 34);
child1.hello();
console.log(1, child.obj === child1.obj);
console.log(2, child.arr === child1.arr);
console.log(3, child.hello === child1.hello);

let child2 = new Child1('张三', 45);
child2.hello();
console.log(' child2 ', child2);