/*
    原理实现：原型链继承+构造函数继承
    优点：
        组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点
    缺点：
        1. 父类被执行了两次，在使用 call 或 apply 继承属性时执行一次，在创建实例替换子类原型时又被执行了一次。
        2. 由于原型对象被替换，原本原型对象的 constructor 属性丢失
*/
function Parent(name, age) {
    this.name = name;
    this.age = age;
}

Parent.prototype.hello = function () {
    console.log(' hello ');
}

function Child(name, age) {
    Parent.call(this, name, age);
}

Child.prototype = new Parent();

const p = new Parent('张三', 33);

const c = new Child('李四', 27);

console.log(' p : ', p);

console.log(' c : ', c);
c.hello();


console.log(' ---- ', Child.prototype);
