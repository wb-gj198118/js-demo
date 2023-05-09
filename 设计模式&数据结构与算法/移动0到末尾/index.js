function moveZeroToEnd(arr) {
    let left = 0, right = 0, len = arr.length;
    // for (let i = 0; i < len; i ++) {
    //     if (arr[i] === 0) {
    //         right ++;
    //     } else {
    //         const temp = arr[left];
    //         arr[left] = arr[right];
    //         arr[right] = temp;
    //         left ++;
    //         right ++;
    //     }
    // }
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] === 0) {
            let j = i + 1;
            while (j < len) {
                if (arr[j] !== 0) {
                    break;
                }
                j++;
            }
            if (j < len) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log(moveZeroToEnd([0, 0, 0, 1, 0]));

console.log(moveZeroToEnd([1, 0, 0, 1]));

console.log(moveZeroToEnd([1, 0, 2, 0, 1, 0]));