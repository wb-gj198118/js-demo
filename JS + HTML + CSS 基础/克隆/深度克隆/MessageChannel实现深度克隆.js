
var s = 9;
var o = {};

var obj = {
    a: 1,
    arr: [3, 4],
    b: { c: 'c' },
    // c: function () {
    //     console.log('c');
    // },
    // d: () => {
    //     console.log('d');
    // },
    nan: NaN,
    e: new Date(),
    reg: new RegExp('\d', 'gi'),
    null: null,
    undef: undefined,
    // sym: Symbol(6666),
    map: new Map([[1, 2], [3, 4]]),
    set: new Set([{}, {}, 5, null, NaN, NaN, null, undefined, undefined, 4, 5, s, s, o, o]),
    // weakMap: new WeakMap([[{ a: 1 }, { a: 'a' }]]),
    // weakSet: new WeakSet([{ a: 1 }, { a: 'a' }]),
};

obj.myFn = obj;

// MessageChannel实现克隆，这个还能解决循环引用问题
function deepClone(obj) {
    return new Promise((resolve) => {
        const { port1, port2 } = new MessageChannel() // 实例化了一个 channel 对象
        port1.postMessage(obj)  // 通过postMessage方法把数据传递
        port2.onmessage = msg => { // 通过onmessage方法监听事件接收到信息
            resolve(msg.data)
        }
    })
}

deepClone(obj).then(res => {
    console.log(' result : ', res);
})
