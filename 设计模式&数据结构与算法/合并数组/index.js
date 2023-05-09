function mergeArr(arr1, arr2) {
    arr1.sort((a, b) => a - b);
    arr2.sort((a, b) => a - b);
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = i + j + 1;
    while (i >= 0 && j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr1[i];
            i--;
        } else {
            arr1[k] = arr2[j];
            j--;
        }
        k--;
    }
    return arr1;
}

console.log(mergeArr([1, 3, 5, 2, 0], [3, 2, 0, 4]));