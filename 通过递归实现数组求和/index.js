
/**
 * 递归实现数组求和
 * @param (Array} arr 需要求和的数组
 * @returns number
 */
function add(arr) {
    function f(i) {
        return i >= arr.length ? 0 : arr[i] + f(i + 1);
    }
    return f(0);
}

console.log('add : ', add([1, 2, 3, 4]));