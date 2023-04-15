function mergeArr(arr1, arr2) {
    let i = arr1.length - 1;
    let j = arr2.length - 1;
    let k = i + j + 1;
    while (j >= 0) {
        if (arr1[i] > arr2[j]) {
            arr1[k] = arr2[i];
            i --; 
        } else {
            arr1[k] = arr2[j];
            j --;
        }
        k --;
    }
    return arr1;
}

console.log(mergeArr([1, 1, 2, 3, 4], [9, 1, 5 , 4, 9, 0]));