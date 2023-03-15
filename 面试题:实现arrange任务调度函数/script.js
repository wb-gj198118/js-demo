
// arrange('William').execute()
// output: William is notified

// arrange('William').do('commit').execute()
// output: 
// William is notified
// Start to commit

// arrange('William').wait(5).do('commit').execute()
// output: 
// William is notified
// 等待5秒之后再次输出
// Start to commit

// arrange('William').waitFirast(5).do('push').execute()
// output: 
// 先等待5秒之后再次输出
// William is notified
// Start to push

function arrange(taskId) {
    const tasks = [];
    tasks.push(() => {
        console.log(`${taskId} is notified`);
    });
    async function execute() {
        for (const task of tasks) {
            await task();
        }
    }
    function doTask(task) {
        tasks.push(() => {
            console.log('Start to ' + task);
        });
        return this;
    }
    function wait(duration) {
        tasks.push(() => new Promise((resolve) => {
            setTimeout(() => { resolve() }, duration * 1000);
        }));
        return this;
    }
    function waitFirst(duration) {
        tasks.unshift(() => new Promise((resolve) => {
            setTimeout(resolve, duration * 1000);
        }));
        return this;
    }
    return {
        execute,
        do: doTask,
        wait,
        waitFirst,
    }
}

// arrange('William').execute();

arrange('William').do('commit').execute();

// arrange('William').wait(5).do('commit').execute();

// arrange('William').waitFirst(5).do('push').execute();