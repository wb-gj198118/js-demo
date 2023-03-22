const { Publisher, Observer } = require('./index.js');

// 定义一个具体的需求文档（prd）发布类
class PrdPublisher extends Publisher {
    observers = [];
    prdState = null;
    constructor() {
        super();
        // 初始化需求文档
        this.prdState = null;
        this.observers = [];
    }

    // 该方法用于获取当前的prdState
    getState() {
        return this.prdState;
    }

    // 该方法用于改变prdState的值
    setState(state) {
        // prd的值发生改变
        this.prdState = state;
        // 需求文档变更，立刻通知所有开发者
        this.notify();
    }
}

// 定义开发者订阅类
class DeveloperObserver extends Observer {
    constructor() {
        super();
        // 需求文档一开始还不存在，prd初始为空对象
        this.prdState = {};
    }
    // 重写一个具体的update方法
    update(publisher) {
        // 更新需求文档
        this.prdState = publisher.getState();
        // 调用工作函数
        this.work();
    }

    // work方法，一个专门搬砖的方法
    work() {
        // 获取需求文档
        const prd = this.prdState;
        // 开始基于需求文档提供的信息搬砖。。。
        console.log('要开始搬砖了', prd);
    }
}

// 创建订阅者：前端张三
const zhangsan = new DeveloperObserver();
// 创建订阅者：服务端开发小A（起名字真的太难了）
const A = new DeveloperObserver();
// 创建订阅者：测试同学小B
const B = new DeveloperObserver();
// 李四出现了
const lisi = new PrdPublisher();
// 需求文档出现了
const prd = {
    // 具体的需求内容
}
// 李四开始拉群
lisi.add(zhangsan);
lisi.add(A);
lisi.add(B);
// 李四发送了需求文档，并@了所有人
lisi.setState(prd);

prd.title = 1;

zhangsan.update(lisi);

prd.title = 2;

A.update(lisi);