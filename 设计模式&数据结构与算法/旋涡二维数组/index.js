
function vortex(m, n) {
    let nums = Array(m).fill(0).map(() => Array(n).fill(0));
    let row = 0, col = 0, stepRow = 0, stepCol = 1;
    let count = 1;
    function hasBlock() {
        return !nums[row] || nums[row][col] !== 0;
    }
    while(true) {
        nums[row][col] = count ++;
        row += stepRow;
        col += stepCol;
        if (hasBlock()) {
            // 反向
            row -= stepRow;
            col -= stepCol;
            // 开始转弯
            if (stepRow === 0) {
                stepRow = stepCol;
                stepCol = 0;
            } else {
                stepCol = -stepRow;
                stepRow = 0;
            }
            row += stepRow;
            col += stepCol;
        }
        if (hasBlock()) {
            break;
        } 
    }
    return nums;
}

console.log('vortex', vortex(3, 3));