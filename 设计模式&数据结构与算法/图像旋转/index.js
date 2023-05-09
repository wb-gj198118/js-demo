const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
];

var rotate = function(matrix) {
    if (!matrix || !matrix.length) return [];
    const rows = matrix.length, cols = matrix[0].length;
    const results = new Array(rows).fill(0).map((_, i) => matrix[i].slice());
    for (let i = rows - 1; i >= 0; --i) {
        for (let col = cols - 1; col >= 0 ; --col) {
            results[i][col] = matrix[rows - col - 1][i];
        }
    }
    return results;
};

console.log(rotate(matrix));