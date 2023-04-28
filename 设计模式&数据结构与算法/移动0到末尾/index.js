function moveZeroToEnd(arr) {
    let left = 0, right = 0, len = arr.length;
    for (let i = 0; i < len; i ++) {
        if (arr[i] === 0) {
            right ++;
        } else {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left ++;
            right ++;
        }
    }
    return arr;
}

console.log(moveZeroToEnd([0, 0, 1]));

console.log(moveZeroToEnd([1, 0, 0, 1]));

console.log(moveZeroToEnd([1, 0, 0, 1, 0]));