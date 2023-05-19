/**
 * 快速排序
 * 算法描述：快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：

    从数列中挑出一个元素，称为 基准（pivot）；

    重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；

    递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
 */
function quickSort(arr) {
    if (!arr || arr.length < 2) return arr;
    const stack = [[0, arr.length - 1]];
    while(stack.length) {
        const [start, end] = stack.pop();
        if (end - start < 1) continue;
        const pivot = mediumOfThree(arr, start, end);
        let left = start;
        let right = end;
        while (left <= right) {
            while(arr[left] < pivot) left ++;
            while(arr[right] > pivot) right --;
            if (left <= right) {
                swap(arr, left, right);
                left ++;
                right --;
            }
        }
        stack.push([start, right]);
        stack.push([left, end]);
    }
    return arr;
}

function mediumOfThree(arr, left, right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[left] > arr[mid]) {
        swap(arr, left, mid);
    }
    if (arr[right] < arr[mid]) {
        swap(arr, mid, right);
        if (arr[mid] < arr[left]) {
            swap(arr, left, mid);
        }
    }
    return arr[mid];
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [1, 0, 9, 1, 10, 2, 7, 0];

console.log('quickSort', quickSort(arr));