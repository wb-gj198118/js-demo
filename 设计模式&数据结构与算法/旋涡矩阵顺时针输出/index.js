const matrix = [
    [1, 2, 3],
    [4, 5, 6], 
    [7, 8, 9],
];

function spiralOrder(matrix) {
    const result = [];
    const rows = matrix.length, columns = matrix[0].length;
    let top = 0, bottom = rows - 1, left = 0, right = columns - 1;
    while(left <= right && top <= right) {
        for (let col = left; col <= right; col ++) {
            result.push(matrix[top][col]);
        }
        for (let row = top + 1; row <= bottom; row ++) {
            result.push(matrix[row][right]);
        }
        if (left < right && top < bottom) {
            for (let col = right - 1; col > left; col --) {
                result.push(matrix[bottom][col]);
            }
            for(let row = bottom; row > top; row --) {
                result.push(matrix[row][left]);
            }
        }
        [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
     }
    // // 逆时针输出
    // while (left <= right && top <= bottom) {
    //     for (let row = top; row <= bottom; row ++) {
    //         result.push(matrix[row][left]);
    //     }
    
    //     for (let col = left + 1; col <= right; col ++) {
    //         result.push(matrix[bottom][col]);
    //     }

    //     if (left < right && top < bottom) {
    //         for (let row = bottom - 1; row > top; row --) {
    //             result.push(matrix[row][right]);
    //         }

    //         for (let col = right; col > left; col --) {
    //             result.push(matrix[top][col]);
    //         }
    //     }
    //     [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
    // }
    return result;
}

const result = spiralOrder(matrix);

console.log('result :', result);