
const obj = { a: 1, b: 2 }

obj.c = obj;
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
    console.log(res);
})
