const matrix = [[1,2,3],[4,5,6],[7,8,9]];

var rotate = function(matrix) {
    if (!matrix || !matrix.length) return [];
    const rows = matrix.length, cols = matrix[0].length;
    const results = JSON.parse(JSON.stringify(matrix));
    for (let row = rows - 1; row >= 0; --row) {
        for (let col = cols - 1; col >= 0 ; --col) {
            results[row][col] = matrix[rows - col - 1][row];
        }
    }
    return results;
};

console.log(rotate(matrix));