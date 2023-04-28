// 数组平铺
function flatten(arr, depth = 1) {
    return arr.reduce((prev, curr) => {
        let result = curr;
        if (Array.isArray(curr) && depth > 0) {
            result = flatten(curr, depth - 1);
        } else if (depth > 0) {
            result = curr;
        } else {
            result = [curr];
        }
        return prev.concat(result);
    }, []);
}

const arr = [1, 2, [3, 4, [5, 6, [8, 10]]]];
const n = 2;

console.log(' 1 : ', arr.flat(n));

console.log('flatten', flatten(arr, n));

