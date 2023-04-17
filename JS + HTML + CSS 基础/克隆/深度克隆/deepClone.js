const { cloneSymbol, getType, validateType, cloneRegExp, initCloneArray } = require('../utils');

var s = Symbol(9);
var o = {};

var objA = {
    a: 1,
    arr: [3, 4],
    b: { c: 'c' },
    c: function () {
        console.log('c');
    },
    d: () => {
        console.log('d');
    },
    nan: NaN,
    e: new Date(),
    reg: new RegExp('\d', 'gi'),
    null: null,
    undef: undefined,
    sym: Symbol(6666),
    map: new Map([[1, 2], [3, 4]]),
    set: new Set([{}, {}, 5, null, NaN, NaN, null, undefined, undefined, 4, 5, s, s, o, o]),
    weakMap: new WeakMap([[{ a: 1 }, { a: 'a' }]]),
    weakSet: new WeakSet([{ a: 1 }, { a: 'a' }]),
};

/** 深克隆的简单实现 TODO: 其余分支待补充 */
function deepClone(obj, map = new WeakMap()) {
    // 当对象不存在或者为空对象时，直接返回
    if (!obj && !Object.keys(obj).length) return obj;
    if (map.has(obj)) return map.get(obj);
    const result = {};
    map.set(obj, result);
    for (let k in obj) {
        const value = obj[k];
        const validation = validateType(value);
        if (validation.isDate) { // 日期
            result[k] = new value.constructor(+value);
        } else if (validation.isRegexp) { // 正则
            result[k] = cloneRegExp(value);
        } else if ([validation.isSet, validation.isMap].includes(true)) { // Set、Map
            result[k] = new value.constructor(value.valueOf());
        } else if (validation.isArray) { // 数组
            result[k] = initCloneArray(value).map(item => deepClone(item, map));
        } else if (validation.isSymbol) { // Symbol
            result[k] = cloneSymbol(value);
        } else if (validation.isObject) { // Object
            result[k] = deepClone(value, map);
        } else {
            result[k] = value;
        }
    }
    return result;
}

objA.obj = objA;

var objB = deepClone(objA);

console.log(' a -> b', objA, objB);