var obj = { a: 1, b: 2, c: { d: 10, e: 20 }, undef: undefined }

// 方案一 JSON.parse(JSON.stringify())
// 此方案存在的弊端：
// 1. 以下两种情况无法实现深拷贝
//  在obj 对象种加入 set get 方法，会导致方法被运算
//  对obj 对象通过 Object.defineProperty() 添加属性时无法被拷贝
// 2. 当对象中的属性值为undefined时，如果不加处理，默认情况下，会被无情抛弃

Object.defineProperty(obj, 'kk', {
    value: '这个是通过属性枚举的方式添加的属性kk',
});

var obj1 = JSON.parse(JSON.stringify(obj)); // 克隆

obj.a = 2;
obj.c.d = 100;

console.log(obj);  // { a: 2, b: 2, c: { d: 100, e: 20}}
console.log(obj1); // { a: 1, b: 2, c:{ d: 10, e: 20}}

/**
 * 深度克隆 
 * @param {*} obj 需要克隆的对象
 */
function deepClone(obj) {
    if (!obj || !Object.keys(obj).length) return obj;
}
