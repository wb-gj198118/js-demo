const array = [1, 2, 3, 4, [8, 9, 0, null, [88, 77, 55]], [null, 5, 7, 9]];

/**
 * 数组反转，支持多维数组
 * @param {*} arr 需要反转的数组
 * @param {*} depth 需要反转的层级
 * @returns 反转后的数组
 */
function reverseArr(data, depth = 0) {
    return data.reduce(function (prev, curr, index, thisArg) {
        let i = thisArg.length - index - 1;
        let v = thisArg[i];
        prev[index] = Array.isArray(v) && depth > 0 ? reverseArr(v, depth - 1) : v;
        return prev;
    }, []);
}

console.log('loop : ', reverseArr(array, 5));