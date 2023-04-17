
// 定义发布者类
class Publisher {
    observers = [];
    constructor() {
        this.observers = [];
    }
    // 增加订阅者
    add(observer) {
        this.observers.push(observer);
    }
    // 移除订阅者
    remove(observer) {
        this.observers.forEach((item, i) => {
            if (item === observer) {
                this.observers.splice(i, 1);
            }
        });
    }
    // 通知所有订阅者
    notify() {
        this.observers.forEach((observer) => {
            observer.update(this);
        });
    }
}

/**
 * 定义订阅者类
 */
class Observer {
    update() {
        console.log(' 更新了 ');
    }
}

module.exports = { Publisher, Observer };