/**
 * 大数相加
 * @param {String} n1 
 * @param {String} n2 
 * @returns n1 + n2
 */
function bigNumAdd(n1, n2, n = 10) {
    let result = '';
    // 获取长度
    const len = Math.max(n1.length, n2.length);
    // 补位
    n1 = n1.padStart(len, '0');
    n2 = n2.padStart(len, '0');
    // 进位
    let curry = 0;
    for (let i = len - 1; i >= 0; i--) {
        // 开始相加
        let sum = +n1[i] + +n2[i] + curry;
        // 计算进位
        curry = Math.floor(sum / n);
        // 将结果追加到result
        result = (sum % n) + result;
    }
    // 最后还有进位的话，需要在前面补’1‘
    if (curry) {
        result = `${1}${result}`;
    }
    return result;
}

const a = '123';
const b = '456';

const addResult = bigNumAdd(a, b);

console.log('addResult => ', addResult, (BigInt(a) + BigInt(b)) === BigInt(addResult));