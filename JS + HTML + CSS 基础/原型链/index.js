/*

    1. 每个函数（类）天生自带一个属性prototype，属性值是一个对象，里面存储了当前类供实例使用的属性和方法，一般陈其为显示原型对象）
        （⚠️注意：Function.prototype.bind没有显示原型对象）
    2. 在浏览器默认给原型开辟的堆内存中有一个constructor属性：存储的是当前类本身, 一般称其为构造函数对象
        （⚠️注意：自己开辟的堆内存中默认没有constructor属性，需要自己手动添加）
    3. 每个对象都有一个__proto__属性，这个属性指向当前实例所属类的原型，一般称其为隐式原型对象
         (⚠️注意：确定所属类，都指向Object.prototype)
    4. 当获取一个对象的某个属性时，如果这个对象本身没有这个属性，那么它会去它的隐式原型__proto__（即它的构造函数的prototype）中查找，如果找到了，就返回找到的属性或对象，没有就继续往上，最终找到Object.prototype时终止, 此过程我们将其称为原型链;

    作用：原型链如此的重要的原因就在于它决定了 JavaScript 中继承的实现方式。

    场景：
        1. 访问上层属性或方法等: 访问本身不存在但在原型链上存在的属性或者方法, 比如：toString, call, apply
        2. 实现继承

*/

function Demo() {

}

Demo.prototype.name = 'Tom';

Demo.prototype.say = function () {

}

const d = new Demo();
    
console.log(1, Demo.__proto__ === Demo.constructor.prototype); // true

console.log(2, d.__proto__ === d.constructor.prototype); // true

console.log(3, d.prototype, d.__proto__); // undefined {}

console.log(4, d instanceof Demo); // true

console.log(5, Demo.prototype.__proto__.__proto__); // null

console.log(6, d.__proto__ === Demo.prototype); // true

console.log(7, Demo.prototype.__proto__ === d.constructor.prototype.__proto__); // true

console.log(8, d.say === d.__proto__.say); // 先在Demo对象中去找，找不到时会去原型链上去找

console.log(9, Object.getPrototypeOf(Demo) === Demo.__proto__); // true

console.log(10, Object.getPrototypeOf(d) === d.constructor.prototype, Object.getPrototypeOf(d) === Demo.prototype.constructor.prototype); // true

console.log(11, Demo.constructor === Function); // true