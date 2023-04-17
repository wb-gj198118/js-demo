const { cloneSymbol, getType, validateType, cloneRegExp, initCloneArray } = require('../utils');

var s = Symbol(9);
var o = {};

var objA = {
    a: 1,
    arr: [3, 4],
    b: { c: 'c' },
    c: function () {

    },
    d: () => {

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

/** 浅比较的简单实现 */
function shadowClone(obj) {
    // 当对象不存在或者为空对象时，直接返回
    if (!obj && !Object.keys(obj).length) return obj;
    const result = {};
    for (let k in obj) {
        const value = obj[k];
        result[k] = value;
    }
    return result;
}

var objB = shadowClone(objA);

objB.a = 2;

objB.b.c = 'b.c的值被修改了';

console.log(' a -> b', objA, objB);