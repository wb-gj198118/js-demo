/*

这个夏天,你想出国去旅行,你一共有N天连续的假日。你咨询了旅游公司,他们
向你提供了旅行方案,方案包括好几个目的地,每个目的地停留一天
如果用代码来表示,每个目的地可以用一个数字来标识,从0到N-1。你的旅程可
以被一个数组ArrayA来描述,A[K](0<=K<N)代表了你旅行的第K天的目的地
是哪里。旅行社没有一个方案能去到所有的目的地,旅行社可以很多不同的方案,
回去到不同的地方。
你希望你假期的每天都在旅行的,同时你也希望你能去到每个旅行公司推荐的目的
地,根据旅行公司的方案,你可能会出现重复访问同一个目的地多次的情况,但你
想要尽可能减少重复去同一个地方的次数。
所以,你的目的是找到最短时间走遍所有旅行公司推荐目的地的方案,注意你的旅
行是连续的,不可中断,

比如,数组A被定义为
A[0]=7
A[1]=3
A[2]=7
A[3]=3
A[4]=1
A[5]=3
A[6]=4
A[7]=1

这个代表了旅行公司推荐了4个目的地(1,3,4,7),最短的假期会从第2天开始,到
第6天结束,也能让你走遍所有的目的地,一共要5天。任务少于5天的旅行方案,
都不能走遍所有的目的地。
你需要编写一个方法: function solution(int A[]) {}
这个方法需要返回走遍所有目的地的最短旅行天数。
比如最上面案例中的返回值应该是5。
如果A=[2,1,1,3,2,1,1,3],应该返回3
如果A=[7,5,2,7,2,7,4,7],应该返回6

请考虑你的代码算法的运行效率。A中的每个元素一定是一个整型数值

*/

function solution(A) {
    let map = new Map();
    let count = 0;
    let uniqueCount = 0;
    let minDays = Infinity;
    for (let i = 0; i < A.length; i++) {
        if (!map.has(A[i])) {
            uniqueCount++;
        }
        map.set(A[i], i);
    }
    if (uniqueCount === 1) {
        return 1;
    }
    for (let i = 0; i < A.length; i++) {
        let visited = new Set();
        for (let j = i; j < A.length; j++) {
            visited.add(A[j]);
            count++;
            if (visited.size === uniqueCount) {
                minDays = Math.min(minDays, count);
                break;
            }
        }
        if (minDays === uniqueCount) {
            break;
        }
        count = 0;
    }
    return minDays;
}

console.log(solution([2, 1, 1, 3, 2, 1, 1, 3]));
console.log(solution([7, 5, 2, 7, 2, 7, 4, 7]));