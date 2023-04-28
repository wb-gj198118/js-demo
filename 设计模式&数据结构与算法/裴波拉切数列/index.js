function memoizer(fn) {
    let cache = [];
    return function (n) {
        if (cache[n] === void 0) {
            cache[n] = fn(n);
        }
        return cache[n];
    }
}

function fib(n) {
    if (n <= 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

const result = memoizer(fib)(6);

console.log('result => ', result);

function fib1(n, n1 = 1, n2 = 1) {
    if (n <= 2) return n2;
    return fib1(n - 1, n2, n1 + n2);
}

function fib2(n) {
    let n1 = 1, n2 = 1, sum = 0;
    for (let i = 2; i < n; i ++) {
        // sum = n1 + n2;
        // n1 = n2;
        // n2 = sum;
        [n1, n2] = [n2, n1 + n2];
    }
    return n2;
}

// 1 1 2 3 5 8
console.log(' 6 => ', fib2(6));