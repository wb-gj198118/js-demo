// 数组平铺
function flatten(arr, depth = 1) {
    // 方案1 reduce
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

    // 方案2 直接循环
    // let results = [];
    // for (let i = 0; i < arr.length; ++i) {
    //     let item = arr[i];
    //     if (Array.isArray(item)) {
    //         if (depth > 0) {
    //             item = flatten(item, depth - 1);
    //         } else {
    //             item = [arr[i]];
    //         }
    //     }
    //     results = results.concat(item);
    // }
    // return results;
}

const arr = [1, 2, [3, 4, [5, 6, [8, 10]]]];
const n = 2;

console.log(' flat : ', arr.flat(n));

console.log('flatten', flatten(arr, n));

