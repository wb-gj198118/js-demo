const matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9], 
    [10, 11, 12],
    [1, 1, 2]
]

function spiralOrder(matrix) {
    const result = [];
    const rows = matrix.length, columns = matrix[0].length;
    let top = 0, bottom = rows - 1, left = 0, right = columns - 1;
    while (left <= right && top <= bottom) {
        // 循环获取当前行列数据
        for (let i = left; i <= right; i ++) {
            result.push(matrix[top][i]);
        }
        // 循环获取下一行最后一列的数据
        for (let i = top + 1; i <= bottom; i ++) {
            result.push(matrix[i][right]);
        }
        if (left < right && top < bottom) {
            // 从右往左循环当前行的列数据
            for (let i = right - 1; i > left; i --) {
                result.push(matrix[bottom][i]);
            }
            // 从下往上循环上一行首列数据
            for (let i = bottom; i > top; i --) {
                result.push(matrix[i][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    }
    return result;
}

const result = spiralOrder(matrix);

console.log('result :', result);