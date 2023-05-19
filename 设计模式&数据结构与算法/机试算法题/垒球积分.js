/*

你正在为一场垒球做计分。
计分会以一个字符串列表的形式保存,每个字符串可以是以了下四种类型之一:
整数(一轮的得分):直接表示您在本轮中获得的积分数。
"+"(一轮的得分):表示本轮获得的得分是前两轮有效 回合合得分的总和。
·"D"(一轮的得分):表示本轮获得的得分是前一轮有效[回合得分的两倍。
"C"(一个操作,这不是一个回合的分数):表示您获得的最最后一个有效回合的
分数是无效的,应该被移除。
每一轮的操作都是永久性的,可能会对前一轮和后一轮产生影响
你需要返回你在所有回合中得分的总和。
示例1:
输入:["5","2","C","D","+"]
输出:30
解释:
第1轮:你可以得到5分。总和是:5。
第2轮:你可以得到2分。总和是:7。
操作1:第2轮的数据无效。总和是:5。
第3轮:你可以得到10分(第2轮的数据已被删除)。总数是:15
第4轮:你可以得到5+10=15分。总数是:30。
示例2:
输入:["5","-2","4","C","D","9","+","+"]
输出:27
解释:
第1轮:你可以得到5分。总和是:5。
第2轮:你可以得到-2分。总数是:3。
第3轮:你可以得到4分。总和是:7。
操作1:第3轮的数据无效。总数是:3。
第4轮:你可以得到-4分(第三轮的数据已被删除)。总和是是:-1
第5轮:你可以得到9分。总数是:8。
第6轮:你可以得到-4+9=5分。总数是13。
第7轮:你可以得到9+5=14分。总数是27。
注意:
输入列表的大小将介于1和1000之间。
列表中的每个整数都将介于-30000和30000之间。

*/

function calPoints(ops) {
    const stack = [];
    let sum = 0;
    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "C") {
            sum -= stack.pop();
        } else if (ops[i] === "D") {
            const lastRound = stack[stack.length - 1];
            stack.push(lastRound * 2);
            sum += lastRound * 2;
        } else if (ops[i] === "+") {
            const lastRound = stack[stack.length - 1];
            const secondLastRound = stack[stack.length - 2];
            stack.push(lastRound + secondLastRound);
            sum += lastRound + secondLastRound;
        } else {
            const roundScore = parseInt(ops[i]);
            stack.push(roundScore);
            sum += roundScore;
        }
    }
    return sum;
}
const ops1 = ["5", "2", "C", "D", "+"];
console.log(calPoints(ops1)); // 输出: 30
const ops2 = ["5", "-2", "4", "C", "D", "9", "+", "+"];
console.log(calPoints(ops2)); // 输出: 27