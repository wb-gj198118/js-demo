/** 
 * @param {number[]} gem 
 * @param {number} p 
 * @param {number} target 
 * @return {number} 
 */
function treeOfInfiniteSouls(gem, p, target) {
    const n = gem.length;
    const ten = [1n];
    const teninv = [1n];
    let tmp = 10n;
    for (let i = 0; i < 120; i++) {
        tmp %= BigInt(p);
        ten.push(tmp);
        teninv.push(modInv(tmp, p));
        tmp *= 10n;
    }
    const L = Array(1 << n).fill(0);
    const pos = {};
    gem.forEach((num, i) => {
        const state = 1 << i;
        L[state] = String(num).length;
        pos[state] = (ten[BigInt(L[state]) + 1n] + BigInt(num) * 10n + 9n) % BigInt(p);
    });
    const k = Array(1 << n).fill(0);
    for (let state = 1; state < (1 << n); state++) {
        const l = (state - 1) & state;
        const r = state ^ l;
        L[state] = L[l] + L[r] + 2;
        k[state] = k[l] + 1;
    }
    const subsets = Array.from({ length: 1 << n }, () => []);
    for (let i = 0; i < (1 << n); i++) {
        const cnt = new Map();
        let s = i;
        let flag = true;
        while (s) {
            if (flag) {
                flag = false;
            } else {
                subsets[i].push([s, i ^ s]);
            }
            s = (s - 1) & i;
        }
    }
    const dp = (state, memo) => {
        if (state in pos) {
            const cnt = new Map();
            cnt.set(pos[state], 1n);
            return cnt;
        }
        if (memo.has(state)) {
            return memo.get(state);
        }
        const subset = subsets[state];
        const cnt = new Map();
        for (let i = 0; i < subset.length; i++) {
            const [ls, rs] = subset[i];
            const cntL = dp(ls, memo);
            const cntR = dp(rs, memo);
            for (const [x, xt] of cntL) {
                for (const [y, yt] of cntR) {
                    const num = (ten[BigInt(L[ls]) + BigInt(L[rs]) + 1n] + BigInt(x * ten[BigInt(L[rs]) + 1n]) + BigInt(y) * 10n + 9n) % BigInt(p);
                    cnt.set(num, (cnt.get(num) || 0n) + xt * yt);
                }
            }
        }
        memo.set(state, cnt);
        return cnt;
    };
    const memo = new Map();
    const cnt = dp((1 << n) - 1, memo);
    return Number(cnt.get(BigInt(target)) || 0n);
}

function modInv(a, p) {
    const bigA = BigInt(a);
    const bigP = BigInt(p);
    const [x, y] = extendedEuclideanAlgorithm(bigA, bigP);
    if (x < 0n) return Number(bigP - (-x % bigP));
    return Number(x % bigP);
}

function extendedEuclideanAlgorithm(a, b) {
    if (b === 0n) return [a, 1n, 0n];
    const [gcd, x1, y1] = extendedEuclideanAlgorithm(b, a % b);
    return [gcd, y1, x1 - a / b * y1];
}
const datas = [
    [[5505, 10240, 19006, 11192, 12835], 539557523, 154824033],
    [[2, 3], 100000007, 11391299],
    [[3, 21, 3], 7, 5],
    [[73], 31, 3],
    [[1, 2, 3, 4, 5, 6, 7, 8], 90007, 12345]
]
datas.forEach((data, i) => {
    console.log(`第${i + 1}组数据, 参数为 =>`, ...data, ', 运行结果为：', (treeOfInfiniteSouls(...data)));
});