// 创建父构造函数
function Maker() { };

Maker.prototype.drive = function () {
    console.log(`我的编号是${this.id}`);
    return  this;
}

// 添加静态工厂方法
Maker.createFactory = function (type) {
    let types = type, newMarker;
    // 若构造函数不存在 则发生错误
    if (typeof Maker[types] !== 'function') {
        throw { name: 'Error', message: `${types}不存在` };
    }
    // 若构造函数存在，则让原型继承父类，但仅继承一次
    if (Maker[types].prototype.drive !== 'function') {
        Maker[types].prototype = new Maker();
    }
    // 创建新实例，并返回
    newMarker = new Maker[types]();
    return newMarker;
}

// 工厂实例
Maker.c1 = function () {
    this.id = 6;
}
Maker.c2 = function () {
    this.id = 3;
}
Maker.c3 = function () {
    this.id = 12;
}

let c1 = Maker.createFactory('c1');
let c2 = Maker.createFactory('c2');
let c3 = Maker.createFactory('c3');

c1.drive();  // '我的编号是6'
c2.drive();  // '我的编号是3'
c3.drive();  // '我的编号是12'