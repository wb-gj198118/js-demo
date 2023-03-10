class SuperTask {
    constructor(count = 2) {
        this.runningCount = 0;
        this.parallelCount = count; // 一次请求时的并发数量
        this.tasks = [];
    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.tasks.push({
                task,
                resolve,
                resolve,
            });
            this.runTask();
        })
    }

    // 依次运行任务列表中的所有任务
    runTask() {
        while (this.runningCount < this.parallelCount && this.tasks.length > 0) {
            const { task, resolve, reject } = this.tasks.shift();
            this.runningCount++;
            // 此处并不严谨哈，应该需要考虑边界值，就是非promise对象的情况，这里暂时不考虑
            task().then(resolve, reject).finally(() => {
                this.runningCount--;
                this.runTask();
            })
        }
    }
}


function timeout(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { resolve() }, time);
    })
}

const superTask = new SuperTask();

function addTask(time, name) {
    superTask.add(() => timeout(time)).then(() => console.log(`任务${name}完成`));
}

addTask(10000, 1); // 10000ms后输出：任务1完成
addTask(5000, 2);  // 5000ms后输出：任务2完成
addTask(3000, 3);  // 8000ms后输出：任务3完成
addTask(4000, 4);  // 12000ms后输出：任务4完成
addTask(5000, 5);  // 15000ms后输出：任务5完成