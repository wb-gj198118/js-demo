
function vortex(m, n) {
    let nums = Array(m).fill(0).map(() => Array(n).fill(0));
    let row = m - 1, col = n - 1, stepRow = 0, stepCol = 1, count = 1;
    function hasBlock() {
        return !nums[row] || nums[row][col] !== 0;
    }
    while (count <= m * n) {
        nums[row][col] = count++;
        console.log(`\n第${count - 1}次循环: \n`);
        console.log(`${row}行-${col}列:`, nums[row][col], ' stepRow: ', stepRow, ' stepCol: ', stepCol, 'hasBlock: ', hasBlock());
        row -= stepRow;
        col -= stepCol;
        if (hasBlock()) {
            // 反向
            row += stepRow;
            col += stepCol;
            // 开始转弯
            if (stepRow === 0) {
                stepRow = stepCol;
                stepCol = 0;
            } else {
                stepCol = -stepRow;
                stepRow = 0;
            }
            row -= stepRow;
            col -= stepCol;
        }
    }
    return nums;
}

console.log('\nvortex', vortex(4, 5));