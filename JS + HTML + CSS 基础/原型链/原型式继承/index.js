/*
    要点说明：
        1. 原型式继承其实是借助了一个中间的构造函数，
            将中间构造函数 F 的 prototype 替换成了父类的原型，
            并创建了一个 F 的实例返回，这个实例是不具备任何属性的（干净的），
            用这个实例替换子类的原型，因为这个实例的原型指向 F 的原型，
            F 的原型同时又是父类的原型对象，所以子类实例继承了父类原型的方法，
            父类只在创建子类实例的时候执行了一次，省去了创建父类实例的过程。
        2. 原型式继承在 ES5 标准中被封装成了一个专门的方法 Object.create，
            该方法的第一个参数与上面 create 函数的参数相同，即要作为原型的对象，
            第二个参数则可以传递一个对象，会把对象上的属性添加到这个原型上，
            一般第二个参数用来弥补 constructor 的丢失问题，这个方法不兼容 IE 低版本浏览器。

    缺点
        1. 属性被创建的所有实例共享
*/

function Parent(name, age) {
    this.name = name;
    this.age = age;
    this.obj = {};
    this.arr = [];
}

Parent.prototype.hello = function () {
    console.log(' hello ');
}

function Child(name, age) {
    this.name = name;
    this.age = age;
}

function create(obj) {
    function F() {}
    F.prototype = obj;
    return new F();
}

const p = new Parent('张三', 33);

const child = create(p);
const child1 = create(p);

console.log(' child : ', child);
console.log(' child1 : ', child1);
console.log(child.obj === child1.obj); // 属性是共享的，一个被修改了，那么都会被修改

// child.hello();