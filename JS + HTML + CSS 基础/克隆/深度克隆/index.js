// JSON.parse(JSON.stringify(value))
// 此方案存在的弊端：
// - 拷贝的对象的值中如果有函数,undefined,symbol则经过JSON.stringify()序列化后的JSON字符串中这个键值对会消失，这些值在如果是数组的值时，会被转换为null
// - 无法拷贝不可枚举的属性，无法拷贝对象的原型链
// - 拷贝Date引用类型会变成字符串
// - 拷贝RegExp引用类型会变成空对象
// - 对象中含有NaN、Infinity和-Infinity，则序列化的结果会变成null
// - 无法拷贝对象的循环应用(即obj[key] = obj)

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
