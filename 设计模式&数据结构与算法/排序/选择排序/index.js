function compare(x, y) {
    if (x === y) return 0;
    else return x < y ? -1 : 1;
}

/**
 * 选择排序
 * 算法描述:
    1. 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置

    2. 然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾

    3. 以此类推，直到所有元素均排序完毕

 */
function selectionSort(arr, compareFn = compare) {
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
        let minIndex = i, maxIndex = i;
        for (let j = i + 1; j < len; ++j) {
            if (compareFn(arr[j], arr[minIndex]) < 0) {
                minIndex = j;
            }
        }
        swap(arr, minIndex, i);
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [1, 9, 1, 10, 2, 7, 4, 9, 2, 5];

console.log('selectionSort', selectionSort(arr));