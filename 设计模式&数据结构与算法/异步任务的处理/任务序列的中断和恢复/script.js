/**
 * 依次顺序执行一系列任务
 * 所有任务执行完成后可以得到任务执行的结果
 * 需要返回两个方法：start用于启动任务，pause用于暂停任务
 * @param  {...Function} tasks 任务列表，无参，异步 
 * @returns 
 */
function processTasks(tasks) {
    let isRunning = false;
    let i = 0; // 当前执行任务的下标
    const result = []; // 最终返回的结果集
    let prom = null;
    return {
        start: function () {
            return new Promise(async (resolve, reject) => {
                if (prom) {
                    // 结束了
                    prom.then(resolve, reject);
                    return;
                }
                if (isRunning) {
                    return;
                }
                isRunning = true;
                while (i < tasks.length) {
                    try {
                        console.log('任务' + (i + 1) + '正在执行中', tasks[i]());
                        result.push(await tasks[i]());
                        console.log('任务' + (i + 1) + '执行完成');
                    } catch (err) {
                        console.log('执行失败了');
                        reject(err);
                        prom = Promise.reject(err);
                        isRunning = false;
                        return;
                    }
                    if (!isRunning && i < tasks.length) {
                        console.log('任务' + (i + 1) + '被中断了');
                        return;
                    }
                    i++;
                }
                // 成功之后的处理
                isRunning = false;
                resolve(result);
                prom = Promise.resolve(result);
            });
        },
        pause: function () {
            isRunning = false;
        }
    }
}