// JSON.parse(JSON.stringify(value))
// 此方案存在的弊端：
// 1. 以下两种情况无法实现深拷贝
//  在obj 对象种加入 set get 方法，会导致方法被运算
//  对obj 对象通过 Object.defineProperty() 添加属性时无法被拷贝
// 2. 当对象中的属性值为undefined、函数、Symbol、NaN时，如果不加处理，默认情况下，非数组中会被无情抛弃，数组中，会被转换为null值
// 3. 对包含循环引用的对象（对象之间相互引用，形成无限循环）执行此方法，会抛出错误

var obj = {
    a: 1, b: 2, c: { d: 10, e: 20 },
    undef: undefined,
    func: function () {},
    n: NaN,
    sym: Symbol(999),
    arr: [undefined, function () {}, Symbol(555), NaN ],
}

Object.defineProperty(obj, 'kk', {
    value: '这个是通过属性枚举的方式添加的属性kk',
});

var obj1 = JSON.parse(JSON.stringify(obj)); // 克隆

obj.a = 2;
obj.c.d = 100;

console.log('原对象: ', obj);  // { a: 2, b: 2, c: { d: 100, e: 20}}
console.log('克隆之后的对象: ', obj1); // { a: 1, b: 2, c:{ d: 10, e: 20}}
