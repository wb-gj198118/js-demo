
function vortex(m, n) {
    let nums = Array(m).fill(0).map(() => Array(n).fill(0));
    let i = 0, j = 0, stepi = 1, stepj = 0;
    let count = 1;
    function hasBlock() {
        return !nums[j] || nums[j][i] !== 0;
    }
    while(true) {
        nums[j][i] = count ++;
        i += stepi;
        j += stepj;
        if (hasBlock()) {
            // 反向
            i -= stepi;
            j -= stepj;
            // 开始转弯
            if (stepj === 0) {
                stepj = stepi;
                stepi = 0;
            } else {
                stepi = -stepj;
                stepj = 0;
            }
            i += stepi;
            j += stepj;
        }
        if (hasBlock()) {
            break;
        } 
    }
    return nums;
}

console.log('vortex', vortex(5, 6));