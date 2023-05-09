/**
 * 插入排序
 * 算法描述: 一般来说，插入排序都采用 in-place 在数组上实现。具体算法描述如下：

    1. 从第一个元素开始，该元素可以认为已经被排序；

    2. 取出下一个元素，在已经排序的元素序列中从后向前扫描；

    3. 如果该元素（已排序）大于新元素，将该元素移到下一位置；

    4. 重复步骤3，直到找到已排序的元素小于或者等于新元素的位置；

    5. 将新元素插入到该位置后；

    6. 重复以上步骤
 */
function insertionSort(arr) {
    const len = arr.length;
    let curr;
    for (let i = 1; i < len; ++i) {
        let j = i - 1;
        curr = arr[i];
        while (j >= 0 && curr < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}

const arr = [9, 1, 10, 2, 7, 4, 9, 2, 5];

console.log('insertionSort', insertionSort(arr));