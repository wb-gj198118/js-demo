
// 发布订阅者模式
class EventEmitter {
    // 保存执行的回调
    handler = {};
    /**
     * 添加注册事件
     * @param {*} type 添加注册事件的类型
     * @param {*} callback 添加注册事件的可执行回调函数
     */
    addEventlister(type, callback) {
        if (typeof callback !== 'function') throw new Error(' callbck is not function ');
        if (!this.handler[type]) {
            this.handler[type] = [];
        }
        this.handler[type].push(callback);
    }
    /**
     * 移除已经添加注册的时间类型
     * @param {*} type 需要移除的事件类型
     * @param {*} callback 需要移除的回调
     */
    removeEventlister(type, callback) {
        if (this.handler[type]) {
            if (!callback) {
                this.handler[type] = void 0;
            } else {
                this.handler[type] = this.handler[type].filter(cbk => cbk !== callback);
            }
        }
    }
    /**
     * 执行已经注册的回调函数
     * @param {*} type 需要执行的回调函数类型
     * @param  {...any} args 执行回调时对应的参数
     */
    emit(type, callback, ...args) {
        if (this.handler[type]) {
            this.handler[type].forEach(cbk => {
                if (cbk === callback && callback) callback(...args);
                else if (!callback) cbk(...args);
            });
        }
    }
    /**
     * 只执行一次的对应的回调函数
     * @param {*} type 需要执行的回调函数类型
     * @param {*} callback 需要执行的回调函数
     * @param  {...any} args 需要执行的回调函数对应的参数
     */
    once(type, callback, ...args) {
        if (this.handler[type]) {
            this.handler[type].forEach(cbk => {
                if (callback) {
                    if (cbk === callback) {
                        callback(...args); // 执行当前回调
                        this.removeEventlister(type, callback); // 执行完后将其移除
                    } else {
                        cbk(...args); // 执行当前回调
                        this.removeEventlister(type, cbk); // 执行完后将其移除
                    }
                } else if (!callback) {
                    cbk(...args); // 执行回调
                    this.removeEventlister(type, cbk); // 执行完后将其移除
                }
            });
        }
    }
}

const myEvent = new EventEmitter();

const handleClick = function () {
    console.log(' 执行了 ');
}

const handleDbClick = function () {
    console.log(' dbclick 执行了 ');
}

const handleDbClick1 = function () {
    console.log(' dbclick1 执行了 ');
}

myEvent.addEventlister('click', handleClick);
myEvent.emit('click', handleClick);

myEvent.emit('click', handleClick);

myEvent.addEventlister('dbclick', handleDbClick);
myEvent.addEventlister('dbclick', handleDbClick1);

myEvent.once('dbclick');

// myEvent.emit('dbclick', handleDbClick);