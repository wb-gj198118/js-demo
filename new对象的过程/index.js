function myNew(constructor, ...args) {
    // 1. 新创建一个对象
    const newObj = Object.create(null);
    // 2. 将新创建的对象的隐式原型指向构造器的原型对象
    // newObj.__proto__ = constructor.prototype;
    Object.setPrototypeOf(newObj, constructor.prototype);
    // 3. 执行并绑定this到新的对象
    const result = constructor.call(newObj, ...args);
    // 4. 返回结果
    return (result !== null && typeof result === 'object' || typeof result === 'function') ? result : newObj;
}

const obj = function B() { };

function Test() {
    this.a = 1;
    this.b = 2;
    this.func = function () {
        console.log(' func ');
    }
    // this.prototype = { cc: 'cc' };
    // return obj;
}

// function A() {
//     console.log('this : ', this);
//     this.a = 1;
//     this.b = 2;
//     this.func = function () {
//         console.log(' func ');
//     }
//     return obj;
// }

let a = myNew(Test);

let b = new Test();

console.log(Test.__proto__ === Test.constructor.prototype);
console.log(' a.cc : ', a.cc);

console.log(' myNew => ', Object.getPrototypeOf(a) === Object.getPrototypeOf(b), a, b);