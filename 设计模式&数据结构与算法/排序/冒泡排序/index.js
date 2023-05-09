/**
 * 冒泡排序
 * 算法描述
    1. 比较相邻的元素。如果第一个比第二个大，就交换它们两个；

    2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数；

    3. 针对所有的元素重复以上的步骤，除了最后一个；

    重复步骤1~3，直到排序完成。
 */
function bubbleSort(arr) {
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
        let has = true;
        for (let j = 0; j < len - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                has = false;
            }
        }
        if (has) break;
    }
    return arr;
}

function swap(arr, i, j) {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [1, 9, 10, 2, 4, 55, 7];

console.log('bubbleSort', bubbleSort(arr));

